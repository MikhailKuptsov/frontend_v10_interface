import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты
import Create_test_window from "./Create_test_window";
import Warning_detele_tasks_in_level from "./warning_delete_tasks_in_level";

//Стили
import "./test_name_page_css.css"



import { Accordion, Button, Card } from "react-bootstrap";


export default function Level_name_page(){

    const levels=[{title:"Уровень 1" , link_name:"/Tasks_name_page"},
        {title:"Уровень 2" , link_name:"/Tasks_name_page"},
        {title:"Уровень 3" , link_name:"/Tasks_name_page"},
        {title:"Уровень 4" , link_name:"/Tasks_name_page"},
        {title:"Уровень 5" , link_name:"/Tasks_name_page"}]


    const listItemsLevels =levels.map( level =>
        <Accordion>
            <Accordion.Item eventKey="1" className="cards_style_tests">
                <Accordion.Header><h4>{level.title}</h4></Accordion.Header>
                <Accordion.Body>
                    <Button className="cards_level_buttons" variant="outline-dark" href={level.link_name} >Выбрать</Button>
                    <Button className="cards_level_buttons" variant="outline-dark" href="/Create_task_from_zero">Создать пункты в уровне</Button>
                    {/* <Button className="cards_level_buttons" variant="outline-danger">Удалить все пункты в уровне</Button> */}
                    <Warning_detele_tasks_in_level/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
    return(
        <>
        <Main_Header/>
        <div className="block_page_create_test">
            <div className="block_header_page">
                <h1>Список Уровней </h1>
                <h1>раздела *название раздела*</h1>
                <h1>подраздела *название подраздела*</h1>
            </div> 
                       
                <div className="card_level_style">
                    {listItemsLevels}
                </div>
                    
        </div>
        <UnderBar/>
        </>
    )
}