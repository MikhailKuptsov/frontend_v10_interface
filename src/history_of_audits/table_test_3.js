import React, { useState } from 'react';
import { Table, Container, Button, Form } from 'react-bootstrap';

const initialData = [
    {
        "school": "школа 113",
        "date_start": "10/11/2024",
        "date_end": "14/11/2024",
        "teacher_name": "Аксимова",
        "student_name": "Маркович",
        "test_name": "алгебра",
        "subtest": "Математика",
        "score": "3.74",
        "access_test": true,
        "access_results": false,
        "link_results": "/test_1"
    }, {
        "school": "школа 115",
        "date_start": "13/12/2024",
        "date_end": "15/12/2024",
        "teacher_name": "Абраменко",
        "student_name": "Романов",
        "test_name": "Русский язык",
        "subtest": "правописание",
        "score": "4.75",
        "access_test": false,
        "access_results": true,
        "link_results": "/link_test_2"
    }, {
        "school": "школа 18",
        "date_start": "13/12/2024",
        "date_end": "15/12/2024",
        "teacher_name": "Алла",
        "student_name": "Рим",
        "test_name": "Параноральное",
        "subtest": "UFO",
        "score": "8.9",
        "access_test": false,
        "access_results": true,
        "link_results": "test_4"
    }
];

function DataTable() {
    const [data, setData] = useState(initialData);
    const [accessTestAll, setAccessTestAll] = useState(false);
    const [accessResultsAll, setAccessResultsAll] = useState(false);

    const columnMapping = {
        "school": "название школы",
        "date_start": "дата нач.",
        "date_end": "дата конц.",
        "teacher_name": "имя преподавателя",
        "student_name": "имя студента",
        "test_name": "название теста",
        "subtest": "раздел",
        "score": "оценка",
        "access_test": "доступ к тесту",
        "access_results": "доступ к результату",
        "link_results": "выбрать тест" // Добавлено новое поле
    };

    const handleCheckboxChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    const handleSubmit = () => {
        console.log(data);
    };

    const handleToggleAccessTest = () => {
        const newAccessTestAll = !accessTestAll;
        setAccessTestAll(newAccessTestAll);

        const newData = data.map(item => ({
            ...item,
            access_test: newAccessTestAll
        }));
        setData(newData);
    };

    const handleToggleAccessResults = () => {
        const newAccessResultsAll = !accessResultsAll;
        setAccessResultsAll(newAccessResultsAll);

        const newData = data.map(item => ({
            ...item,
            access_results: newAccessResultsAll
        }));
        setData(newData);
    };

    const handleSelectTest = (link) => {
        window.location.href = link; // Переход по ссылке
    };

    const headerKeys = Object.values(columnMapping);

    return (
        <Container>
            <h1>История аудитов завода</h1>
            <div className="mb-3">
                <Button variant="primary" onClick={handleSubmit} style={{margin:"5px"}}>Отправить изменения</Button>{' '}
                <Button variant="secondary" onClick={handleToggleAccessTest} style={{margin:"5px"}}>
                    {accessTestAll ? 'Закрыть доступ к тесту' : 'Открыть доступ к тесту'}
                </Button>{' '}
                <Button variant="info" style={{margin:"5px"}} onClick={handleToggleAccessResults}>
                    {accessResultsAll ? 'Закрыть доступ к результатам' : 'Открыть доступ к результатам'}
                </Button>
            </div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        {headerKeys.map(key => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.school}</td>
                            <td>{item.date_start}</td>
                            <td>{item.date_end}</td>
                            <td>{item.teacher_name}</td>
                            <td>{item.student_name}</td>
                            <td>{item.test_name}</td>
                            <td>{item.subtest}</td>
                            <td>{item.score}</td>
                            <td>
                                <Form.Check
                                    type="checkbox"
                                    label={item.access_test ? "Да" : "Нет"}
                                    checked={item.access_test}
                                    onChange={(e) => handleCheckboxChange(index, 'access_test', e.target.checked)}
                                />
                            </td>
                            <td>
                                <Form.Check
                                    type="checkbox"
                                    label={item.access_results ? "Да" : "Нет"}
                                    checked={item.access_results}
                                    onChange={(e) => handleCheckboxChange(index, 'access_results', e.target.checked)}
                                />
                            </td>
                            <td>
                                <Button variant="outline-primary" onClick={() => handleSelectTest(item.link_results)}>
                                    Выбрать
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default DataTable;