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

const tests_audit_names = [
    { title: 'Менеджмент', test_status: false },
    { title: 'Подготовка производства', test_status: true},
    { title: 'SF-m Ручные операции', test_status: false},
    { title: 'SF-e оборудование', test_status: false},
    { title: 'ОТиБ', test_status: false},
    { title: 'Качество', test_status: false },
    { title: 'Техническое развитие', test_status:true},
  ];

const history_audit=[{fabric:"ВТРЗ", 
    date_start:"10.10.2024", 
    date_end:"10.11.2024",
    leader_audit:"лидер_сотрудник",
    auditor_name:"сортрудник A",
    test_name:"Менеджмент",
    subtest_name:"М1 руководство",
    score:"2.54"},
    
    {fabric:"ВТРЗ", 
        date_start:"10.10.2024", 
        date_end:"10.11.2024",
        leader_audit:"лидер_сотрудник",
        auditor_name:"сортрудник A",
        test_name:"Менеджмент",
        subtest_name:"М1 руководство",
        score:"2.54"},
        
        {fabric:"ВТРЗ", 
            date_start:"10.10.2024", 
            date_end:"10.11.2024",
            leader_audit:"лидер_сотрудник",
            auditor_name:"сортрудник A",
            test_name:"Менеджмент",
            subtest_name:"М1 руководство",
            score:"2.54"}]

export default function History_audit_users_page(){
    const list_of_tests=tests_audit_names.map(item=><p>{item.title} - {item.test_status===false ? "Невыполнено":"выполнено"}</p>)

    const List_of_table_elements=history_audit.map(item=>
    <Card className="block_audit_history_card">
        <Card.Body >
            <h5>Завод: {item.fabric} -- Раздел: {item.test_name}</h5>
            <h5>Подраздел: {item.subtest_name} </h5>
            <h5 >Оценка: {item.score}</h5>
            <h5>Статус: Открыт</h5>
            <p>Дата начала: {item.date_start} -- Дата конца:{item.date_end}</p>
            <hr/>
            {list_of_tests}
            <hr/>        
            <p>Лидер аудита:{item.leader_audit}</p>
            <Button variant="outline-dark" size="lg">Выбрать</Button>
        </Card.Body>
    </Card>
    )
    
    return(
        <>
                    <div className="block_audit_cards_place_history">
                        {List_of_table_elements}
                        
                    </div>    
        </>
    )
}

