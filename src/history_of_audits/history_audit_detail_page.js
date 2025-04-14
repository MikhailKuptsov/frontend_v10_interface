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

export default function History_audit_detial_page(){
    const List_of_table_elements=history_audit.map(item=><tr>
        <td>{item.fabric}</td>
        <td>{item.date_start}</td>
        <td>{item.date_end}</td>
        <td>{item.leader_audit}</td>
        <td>{item.auditor_name}</td>
        <td>{item.test_name}</td>
        <td>{item.subtest_name}</td>
        <td>{item.score}</td>
        <td><Button variant="outline-dark" href="/test_page_v3/Audit_test_task_page">Выбрать</Button></td>
        <td><Button variant="outline-dark">Pедактировать</Button></td>
        </tr>)
    
    return(
        <>
        <Main_Header/>
                <div className="block_page_planning_history">
                    <div className="block_header_page_2">
                        <h1>История аудитов завода</h1>
                    </div> 
                    <div>
                        <div className="block_page_planning_audits">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                    <th>Завод</th>
                                    <th>дата начала</th>
                                    <th>дата конца</th>
                                    <th>Лидер аудита</th>
                                    <th>Аудитор</th>
                                    <th>Блок</th>
                                    <th>подраздел</th>
                                    <th>Оценка</th>
                                    <th>Посмотреть</th>
                                    <th>Изменить</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {List_of_table_elements}
                                </tbody>
                            </Table>
                        </div>  
                    </div>   
                </div>
                <UnderBar/>        
        </>
    )
}

