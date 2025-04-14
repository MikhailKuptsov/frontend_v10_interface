//Идеальная версия
import React, { useState, useEffect } from 'react';
import { Container, Button, Offcanvas, Tabs, Tab, Form, Alert, Accordion } from 'react-bootstrap';
import data_json from "./data.json"

export default function Audit_prototype_v3(){
    const [data, setData] = useState([]);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [formData, setFormData] = useState({});
    const [submittedLevels, setSubmittedLevels] = useState({}); // Object to track submitted levels
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('data.json');
                // const jsonData = await response.json();
                const jsonData = data_json
                setData(jsonData);
            } catch (error) {
                console.error('Ошибка загрузки JSON:', error);
                setAlertMessage('Ошибка загрузки данных!');
                setShowAlert(true);
            }
        };

        fetchData();
    }, []);

    const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

    const handleSectionSelect = (index) => {
        setSelectedSection(index);
        setSelectedLevel(data[index].test_value[0].level_name);
        setShowOffcanvas(false);

        // Initialize form data for the section
        const initialFormData = {};
        data[index].test_value.forEach(level => {
            level.level_value.forEach(task => {
                const key = `${index}-${level.level_name}-${task.task_label}`;
                initialFormData[key] = formData[key] || {
                    task_value: '',
                    task_words: '',
                    task_value_2: '',
                    anser_yes_no: false,
                    comments: '',
                };
            });
        });
        setFormData(prev => ({ ...prev, ...initialFormData }));
    };

    const handleLevelSelect = (levelName) => {
        setSelectedLevel(levelName);
    };

    const handleInputChange = (sectionIndex, levelName, taskLabel, field, value) => {
        const key = `${sectionIndex}-${levelName}-${taskLabel}`;
        setFormData(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                [field]: value,
            },
        }));
    };

    const handleSubmitLevel = () => {
        if (selectedSection === null || selectedLevel === null) {
            setAlertMessage('Пожалуйста, выберите раздел и уровень для отправки.');
            setShowAlert(true);
            return;
        }

        const levelData = {};
        const sectionIndex = selectedSection;

        const currentLevel = data[sectionIndex].test_value.find(level => level.level_name === selectedLevel);

        if (currentLevel) {
            currentLevel.level_value.forEach(task => {
                const key = `${sectionIndex}-${selectedLevel}-${task.task_label}`;
                levelData[key] = formData[key] || {
                    task_value: '',
                    task_words: '',
                    task_value_2: '',
                    anser_yes_no: false,
                    comments: '',
                };
            });

            console.log(`Результаты уровня "${selectedLevel}" раздела "${data[sectionIndex].test_name}":`, levelData);

            // Update submittedLevels state for the selected level
            setSubmittedLevels(prev => ({
                ...prev,
                [selectedSection]: {
                    ...prev[selectedSection],
                    [selectedLevel]: true,
                },
            }));

            setAlertMessage(`Уровень "${selectedLevel}" раздела "${data[sectionIndex].test_name}" успешно отправлен!`);
            setShowAlert(true);
        } else {
            setAlertMessage(`Уровень "${selectedLevel}" не найден.`);
            setShowAlert(true);
        }
    };

    const handleClearSection = () => {
        if (selectedSection === null || selectedLevel === null) {
            setAlertMessage('Пожалуйста, выберите раздел и уровень для очистки.');
            setShowAlert(true);
            return;
        }

        const sectionIndex = selectedSection;
        const levelName = selectedLevel;
        const newFormData = { ...formData };

        data[sectionIndex].test_value.find(level => level.level_name === levelName).level_value.forEach(task => {
            const key = `${sectionIndex}-${levelName}-${task.task_label}`;
            delete newFormData[key];
        });

        setFormData(newFormData);
        setAlertMessage(`Форма уровня "${levelName}" раздела "${data[sectionIndex].test_name}" очищена.`);
        setShowAlert(true);
    };

    const renderTasks = () => {
        if (selectedSection === null || selectedLevel === null) {
            return <p>Выберите раздел и уровень.</p>;
        }

        const section = data[selectedSection];
        const level = section.test_value.find(level => level.level_name === selectedLevel);

        if (!level) {
            return <p>Уровень не найден.</p>;
        }

        return (
            <Accordion defaultActiveKey="0">
                {level.level_value.map((task, index) => {
                    const key = `${selectedSection}-${selectedLevel}-${task.task_label}`;
                    const taskData = formData[key] || {
                        task_value: '',
                        task_words: '',
                        task_value_2: '',
                        anser_yes_no: false,
                        comments: '',
                    };

                    return (
                        <Accordion.Item eventKey={index.toString()} key={task.task_label}>
                            <Accordion.Header>Задание {task.task_label}</Accordion.Header>
                            <Accordion.Body>
                                <p>{task.task_value}</p>
                                <p>{task.task_words}</p>

                                <Form.Group controlId={`task_value-${key}`}>
                                    <Form.Label>{task.task_value_2}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={taskData.task_value_2 || ''}
                                        onChange={(e) => handleInputChange(selectedSection, selectedLevel, task.task_label, 'task_value_2', e.target.value)}
                                    />
                                </Form.Group>

                                {task.deadline && (
                                    <p>Срок выполнения: {task.deadline}</p>
                                )}

                                {task.anser_yes_no && (
                                    <Form.Group controlId={`anser_yes_no-${key}`}>
                                        <Form.Check
                                            type="checkbox"
                                            label="Да/Нет"
                                            checked={taskData.anser_yes_no || false}
                                            onChange={(e) => handleInputChange(selectedSection, selectedLevel, task.task_label, 'anser_yes_no', e.target.checked)}
                                        />
                                    </Form.Group>
                                )}

                                {task.comments && (
                                    <Form.Group controlId={`comments-${key}`}>
                                        <Form.Label>Комментарии</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={taskData.comments || ''}
                                            onChange={(e) => handleInputChange(selectedSection, selectedLevel, task.task_label, 'comments', e.target.value)}
                                        />
                                    </Form.Group>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        );
    };

    return (
        <Container>
            <h1>Тестовое задание</h1>

            <Button variant="primary" onClick={handleOffcanvasToggle} className="mb-3">
                Выбрать раздел
            </Button>

            <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Выберите раздел</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {data.map((section, index) => (
                        <Button
                            key={index}
                            variant="outline-secondary"
                            className="mb-2 w-100"
                            onClick={() => handleSectionSelect(index)}
                            // disabled={Object.keys(submittedLevels).length > 0 && submittedLevels[index] && Object.keys(submittedLevels[index]).length === data[index].test_value.length} // Disable if all levels are submitted
                        >
                            {section.test_name}
                            {Object.keys(submittedLevels).length > 0 && submittedLevels[index] && Object.keys(submittedLevels[index]).length === data[index].test_value.length ? " (Все уровни отправлены)" : ""}
                        </Button>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>

            {selectedSection !== null && (
                <div>
                    <h2>{data[selectedSection].test_name}</h2>

                    <Tabs activeKey={selectedLevel} onSelect={handleLevelSelect}>
                        {data[selectedSection].test_value.map((level) => (
                            <Tab
                                key={level.level_name}
                                eventKey={level.level_name}
                                title={level.level_name}
                                // Remove the disabled attribute
                            >
                                {renderTasks()}
                            </Tab>
                        ))}
                    </Tabs>

                    <Button variant="warning" onClick={handleClearSection} className="me-2">
                        Очистить уровень
                    </Button>
                    <Button variant="success" onClick={handleSubmitLevel}>
                        Отправить уровень
                    </Button>
                </div>
            )}

            <Alert show={showAlert} variant="info" onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
            </Alert>
        </Container>
    );
};
