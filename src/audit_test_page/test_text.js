import React, {useState} from "react";
import { Accordion, Button, Dropdown,Row,Col, Form, Modal } from "react-bootstrap";
import Card_task from "./Card_task";
import Warning_save from "./warning_save";

export default function Test_text({questions}){
    // ЦИКЛ для перебора карточек с заданиями
    const list_Of_Question_Cards = questions.map( a =>
        <Card_task task_data={a}/>
            );

    return(
        <>
        <div style={{margin:'5px'}}><Button variant="outline-dark">Выгрузка теста в виде таблицы excel</Button></div>
        <Accordion defaultActiveKey="0" >
            {/*Список компонентов карточкек с заданиями */}
            {list_Of_Question_Cards}

            <div style={{margin:'5px'}}>
                <Warning_save/>
            </div>
            
        </Accordion>
        
        
        </>
    );
}