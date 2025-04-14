import React from "react";
import { Accordion, Button, Form, Row } from "react-bootstrap";

export default function Card_task({task_data}){
    
    return(
        <>
        {/* Компонент карточка с заданием */}
        <Accordion.Item eventKey={task_data.key_id}>
                <Accordion.Header>Пункт №{task_data.label}</Accordion.Header>
                <Accordion.Body>
                    <h6>Требование дорожной карты ПС ЖДРМ. Как достичь (How):</h6>
                    <p>{task_data.task}</p>
                    <h6>Контрольный элемент. Метод контроля:</h6>
                    <p>{task_data.control_element}</p>
                    <h6>Список мероприятий мероприятий на 2024 г. :</h6>
                    <p>{task_data.list_of_events}</p>
                    <h6>Исполнитель:</h6>
                    <p>{task_data.executor}</p>
                    <h6>Срок:</h6>
                    <p>{task_data.date}</p>
                    {/* <div style={{width:"130px"}}>
                        <Row>
                            <Col><p>Ответ:</p></Col>
                            <Col><Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Да
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">да</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">нет</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></Col>
                        </Row>
                    </div> */}
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Ответ:</Form.Label>
                        <Form.Select aria-label="Default select example" style={{width:"200px"}}>
                            <option value="no">Нет</option>
                            <option value="yes">Да</option>
                        </Form.Select>
                        <Form.Label>Выберите файл:</Form.Label>
                        <Form.Control type="file" />
                        <Form.Label>Комментарий</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    
                        
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}