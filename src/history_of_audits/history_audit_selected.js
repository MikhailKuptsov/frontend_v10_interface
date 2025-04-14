import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Tabs, Tab} from "react-bootstrap";


//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты
import HorizontalBarChart from "./Horizontal_BarChart";
import Recharts_Bar_char from "./Recharts_bar_chart";

//стили
import "./planning_history_audit_style.css"


import { Accordion, Button, Card } from "react-bootstrap";

export default function History_audit_selected(){
    return(
        <>
                    <div className="block_content_history_of_audit">
                        <Card>
                            <Card.Header>
                                <div >
                                    <h4 className="card_history_audit_header_item">ВТРЗ</h4>
                                    <h4 className="card_history_audit_header_item">20.01.25--23.01.25</h4>
                                    <h4 className="card_history_audit_header_item">Общая оценка: 2,10</h4>
                                    <h4 className="card_history_audit_header_item">Статус - Выполняется</h4>
                                </div>
                                <Button variant="outline-dark"  
                                // className="card_history_audit"
                                 size="lg"
                                 style={{marginTop:"5px", marginRight:"5px"}}
                                href="/History_audit_detail_page_v2">Выбрать</Button>
                                
                                <Button variant="outline-dark" size="lg" style={{marginTop:"5px", marginRight:"5px"}}>Редактировать аудит</Button>
                                {/* <Button variant="outline-primary" size="lg" style={{marginTop:"5px", marginRight:"5px"}}>Закрыть аудит</Button> */}
                                <Button variant="outline-danger" size="lg" style={{marginTop:"5px"}}>Удалить</Button>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                {/* <HorizontalBarChart/> */}
                                <Recharts_Bar_char/>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                             
        </>
    )
}

