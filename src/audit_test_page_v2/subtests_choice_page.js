import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from "react-bootstrap";


//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Персональные компоненты

//стили
import "./audit_page_style.css"


export default function Subtest_choice_page(){
    return(
        <>
                <Main_Header/>
                <div className="block_page_audit">
                    <div className="block_header_page">
                        <h1>Выберите подраздел </h1>
                        <h3>Завод:*название завода*</h3>
                        <h3>Раздел:*название раздела*</h3>
                    </div> 
          
                    <div className="cards_tests_place">
                            
                            <Card className="cards_style_tests_audit">
                                <Card.Header>
                                    <h4>ОТиБ1 ОТ и ТБ на участках  с ручными операциями</h4>
                                </Card.Header>
                                <Card.Body className="cards_body_tests_buttons_place">
                                    <Button className="cards_body_tests_buttons" variant="outline-dark" href="/test_page_v3/Audit_test_task_page" size="lg">Выбрать</Button>
                                    {/* <Button className="cards_body_tests_buttons" variant="outline-dark">Удалить</Button> */}
                                </Card.Body>
                            </Card>
                            
                            

                    </div>
                </div>
                <UnderBar/>
        </>
    )
}

