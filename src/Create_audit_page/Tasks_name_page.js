import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты
import Create_test_window from "./Create_test_window";
import Warning_detele_task from "./warning_delete_task";

//Стили
import "./test_name_page_css.css"



import {Accordion, Button, Card } from "react-bootstrap";


export default function Tasks_name_page(){
    const tasks=[{value1:"Пункт 1", 
                value2:"текст 2",
                value3:"текст 3",
                value4:"текст 4",
                value5:"текст 5"},
                {value1:"Пункт 2", 
                    value2:"текст 2",
                    value3:"текст 3",
                    value4:"текст 4",
                    value5:"текст 5"}]
    const listItemsTasks=tasks.map(item=>
        //  <Card className="cards_style_tests">
        //         <Card.Header>
        //             <h4>Заголовок пункта {item.value1}</h4>
        //         </Card.Header>
        //         <Card.Body className="cards_body_tests_buttons_place">
        //             <Button className="cards_body_tests_buttons" variant="outline-dark">Редактировать Пункт</Button>
        //             <Button className="cards_body_tests_buttons" variant="outline-dark">Удалить</Button>
        //         </Card.Body>
        // </Card>
        <Accordion>
            <Accordion.Item eventKey="1" className="cards_style_tests">
                <Accordion.Header>
                    <div>
                        <h4>{item.value1}</h4>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div>
                    <strong><p>Требование дорожной карты ПС ЖДРМ. Как достичь (How):</p></strong>
                        <p>{item.value2}</p>
                        <strong><p>Контрольный элемент. Метод контроля:</p></strong>
                        <p>{item.value3}</p>
                        <strong><p>Список мероприятий мероприятий на 2024 г.:</p></strong>
                        <p>{item.value4}</p>
                        <strong><p>Исполнитель :</p></strong>
                        <p>{item.value5}</p>
                    </div>
                    <div >
                    <Button style={{marginRight:"5px", marginTop:"5px"}} variant="outline-dark" href="/Edit_task_page">Редактировать Пункт</Button>
                    <Warning_detele_task/>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
    return(
        <>
        <Main_Header/>
        <div className="block_page_create_test">
            <div className="block_header_page">
                <h1>Список пунктов</h1>
                <h1>раздела *название раздела*</h1>
                <h1>подраздела *название подраздела*</h1>
                <h1>уровень *номер уровня*</h1>
            </div> 
            <div className="button_create">
                            <Button className="button_test_style" variant="outline-dark" size="lg" href="/Create_task_page">Создать новый пункт</Button>
                            {/* <Create_test_window/> */}
                        </div>
                       
                <div className="card_level_style">
                {listItemsTasks}          
                </div>
                    
        </div>
        <UnderBar/>
        </>
    )
}