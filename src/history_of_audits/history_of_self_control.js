import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Tabs, Tab} from "react-bootstrap";


//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты


//стили
import "./planning_history_audit_style.css"


import { Accordion, Button, Card, Table} from "react-bootstrap";

const history_audit=[{fabric:"ВТРЗ", 
    date_start:"10.10.2024", 
    date_end:"10.11.2024",
    leader_audit:"лидер_сотрудник",
    auditor_name:"сортрудник A",
    test_name:"Менеджмент",
    subtest_name:"Все",
    score:"2.54"},
    
    {fabric:"ВТРЗ", 
        date_start:"10.10.2024", 
        date_end:"10.11.2024",
        leader_audit:"лидер_сотрудник",
        auditor_name:"сортрудник A",
        test_name:"Менеджмент",
        subtest_name:"Все",
        score:"2.54"},
        
        {fabric:"ВТРЗ", 
            date_start:"10.10.2024", 
            date_end:"10.11.2024",
            leader_audit:"лидер_сотрудник",
            auditor_name:"сортрудник A",
            test_name:"Менеджмент",
            subtest_name:"Все",
            score:"2.54"}]

export default function History_of_self_control(){
    const List_of_table_elements=history_audit.map(item=>
    <Card className="block_audit_history_card">
        <Card.Body >
            <h5>Завод: {item.fabric} -- Раздел: {item.test_name}</h5>
            <h5>Подраздел: {item.subtest_name} </h5>
            <h5 >Оценка: {item.score}</h5>
            <p>Дата начала: {item.date_start} -- Дата конца:{item.date_end}</p>
            
            <p>Лидер аудита:{item.leader_audit}</p>
            <Button variant="outline-dark" size="lg">Выбрать</Button>
        </Card.Body>
    </Card>
    )
    
    return(
        <>
        <Main_Header/>
                <div className="block_page_planning_history">
                    <div className="block_header_page_2">
                        <h1>История самоконтроля завода</h1>
                    </div> 
                    <div className="block_audit_cards_place_history">
                        {List_of_table_elements}
                    </div>   
                </div>
                <UnderBar/>        
        </>
    )
}

