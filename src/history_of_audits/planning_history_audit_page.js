import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Tabs, Tab} from "react-bootstrap";


//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты
import History_audit_selected from "./history_audit_selected";
//стили
import "./planning_history_audit_style.css"
import "./tabs_css.css"


import { Accordion, Button, Card } from "react-bootstrap";

export default function Planning_history_audit_page(){
    const [key, setKey] = useState('all');
    return(
        <>
        <Main_Header/>
                <div className="block_page_planning_history">
                    <div className="block_header_page_2">
                        <h1>История аудитов</h1>
                    </div>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        variant='tabs'
                        data-bs-theme="dark"
                        // style={{backgroundColor:"#1c3572", }}
                        fill
                    >
                        <Tab eventKey="all" title="Все"  >
                            <History_audit_selected/>
                            </Tab>
                        <Tab eventKey="now" title="Текущие аудиты">
                            <History_audit_selected/>
                        </Tab>
                        <Tab eventKey="past" title="Закрытые аудиты">
                            <History_audit_selected/>
                        </Tab>
                    </Tabs>
                       
                </div>
                <UnderBar/>        
        </>
    )
}

