import React, { useState, useEffect } from 'react';
import { Container, Button, Offcanvas, Tabs, Tab, Form, Alert, Accordion } from 'react-bootstrap';
import data_json from "./data.json"


export default function Audit_prototype_v8(){
    const [data, setData] = useState([]);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [formData, setFormData] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertPlacement, setAlertPlacement] = useState('offcanvas');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('data.json');
                // const jsonData = await response.json();
                const jsonData=data_json
                setData(jsonData);
            } catch (error) {
                console.error('Ошибка загрузки JSON:', error);
                setAlertMessage('Ошибка загрузки данных!');
                setShowAlert(true);
                setAlertPlacement('offcanvas');
            }
        };

        fetchData();
    }, []);

    const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

    const handleSectionSelect = (index) => {
        setSelectedSection(index);
        setSelectedLevel(data[index].test_value[0].level_name);
        setShowOffcanvas(false);

        const initialFormData = {};
        data[index].test_value.forEach(level => {
            level.level_value.forEach(task => {
                const key = `${index}-${level.level_name}-${task.task_label}`;
                initialFormData[key] = formData[key] || {
                    task_value: '',
                    task_words: '',
                    task_list:'',
                    task_value_2: '',
                    anser_yes_no: 'Нет', // Default value for dropdown
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

    const handleNextLevel = () => {
        if (selectedSection === null) {
            setAlertMessage('Выберите раздел.');
            setShowAlert(true);
            setAlertPlacement('tabs');
            return;
        }

        const section = data[selectedSection];
        const levels = section.test_value;
        const currentLevelIndex = levels.findIndex(level => level.level_name === selectedLevel);

        if (currentLevelIndex === -1) {
            setAlertMessage('Текущий уровень не найден.');
            setShowAlert(true);
            setAlertPlacement('tabs');
            return;
        }

        if (currentLevelIndex < levels.length - 1) {
            setSelectedLevel(levels[currentLevelIndex + 1].level_name);
        } else {
            setAlertMessage('Это последний уровень в разделе.');
            setShowAlert(true);
            setAlertPlacement('tabs');
        }
    };

    const handleSubmitAll = () => {
        console.log('Все данные форм:', formData);
        setAlertMessage('Все данные отправлены в консоль.');
        setShowAlert(true);
        setAlertPlacement('offcanvas');
    };

    const handleSubmitLevel = () => {
        if (selectedSection === null || selectedLevel === null) {
            setAlertMessage('Пожалуйста, выберите раздел и уровень для отправки.');
            setShowAlert(true);
            setAlertPlacement('tabs');
            return;
        }

        const sectionIndex = selectedSection;
        const levelData = {};
        const currentLevel = data[sectionIndex].test_value.find(level => level.level_name === selectedLevel);

        if (currentLevel) {
            currentLevel.level_value.forEach(task => {
                const key = `${sectionIndex}-${selectedLevel}-${task.task_label}`;
                levelData[key] = formData[key] || {
                    task_value: '',
                    task_words: '',
                    task_list:'',
                    task_value_2: '',
                    anser_yes_no: 'Нет', // Default value for dropdown
                    comments: '',
                };
            });
            console.log(`Данные уровня "${selectedLevel}" раздела "${data[sectionIndex].test_name}":`, levelData);
            setAlertMessage(`Данные уровня "${selectedLevel}" раздела "${data[sectionIndex].test_name}" отправлены в консоль.`);
        } else {
            setAlertMessage('Уровень не найден.');
        }
        setShowAlert(true);
        setAlertPlacement('tabs');

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
                        task_list:'',
                        task_value_2: '',
                        anser_yes_no: 'Нет',
                        comments: '',
                    };

                    return (
                        <Accordion.Item eventKey={index.toString()} key={task.task_label}>
                            <Accordion.Header>Пункт № {task.task_label}</Accordion.Header>
                            <Accordion.Body>
                                <h6>Требование дорожной карты ПС ЖДРМ. Как достичь (How): </h6>
                                <p>{task.task_value}</p>
                                <h6>Контрольный элемент. Метод проверки</h6>
                                <p>{task.task_words}</p>
                                <h6>Список мероприятий мероприятий на 2024 г. </h6>
                                <p>{task.task_list}</p>

                                {/* <Form.Group controlId={`task_value-${key}`}>
                                    <Form.Label>{task.task_value_2}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={taskData.task_value_2 || ''}
                                        onChange={(e) => handleInputChange(selectedSection, selectedLevel, task.task_label, 'task_value_2', e.target.value)}
                                    />
                                </Form.Group> */}

                                {task.deadline && (
                                    <p>Срок выполнения: {task.deadline}</p>
                                )}

                                {task.anser_yes_no && (
                                    <Form.Group controlId={`anser_yes_no-${key}`}>
                                        <Form.Label>Да/Нет</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={taskData.anser_yes_no || 'Нет'}
                                            onChange={(e) => handleInputChange(selectedSection, selectedLevel, task.task_label, 'anser_yes_no', e.target.value)}
                                        >
                                            <option>Да</option>
                                            <option>Нет</option>
                                        </Form.Control>
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
            <h1>Дорожная карта ТОС</h1>

            <Button variant="primary" onClick={handleOffcanvasToggle} className="mb-3" style={{backgroundColor:"#1c3572"}}>
                Выбрать раздел
            </Button>

            {showAlert && alertPlacement === 'offcanvas' && (
                <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                </Alert>
            )}

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
                        >
                            {section.test_name}
                        </Button>
                    ))}

                    <Button variant="success" onClick={handleSubmitAll} className="mt-3 w-100">
                        Отправить все результаты
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>

            {selectedSection !== null && (
                <div>
                    <h2>{data[selectedSection].test_name}</h2>

                    {showAlert && alertPlacement === 'tabs' && (
                        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                            {alertMessage}
                        </Alert>
                    )}

                    <Tabs activeKey={selectedLevel} onSelect={handleLevelSelect} data-bs-theme="dark">
                        {data[selectedSection].test_value.map((level) => (
                            <Tab
                                key={level.level_name}
                                eventKey={level.level_name}
                                title={level.level_name}
                            >
                                {renderTasks()}
                            </Tab>
                        ))}
                    </Tabs>

                    <Button variant="success" onClick={handleSubmitLevel} className="mt-2 me-2" style={{marginBottom:"5px"}}>
                        Отправить уровень
                    </Button>

                    <Button  onClick={handleNextLevel} className="mt-2" style={{backgroundColor:"#1c3572",marginBottom:"5px"}}>
                        Следующий уровень
                    </Button>

                </div>
            )}
        </Container>
    );
};

