import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Tabs, Tab} from "react-bootstrap";


//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты
import History_audit_users_page from "./history_audit_users";

//стили
import "./planning_history_audit_style.css"

export default function History_audit_users_page_select() {
    const [key, setKey] = useState('now');
  
    return (
    <>
    <Main_Header/>
        <div className="block_page_planning_history">
            <div className="block_header_page_2">
                <h1>История аудитов завода</h1>
            </div> 
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    data-bs-theme="dark"
                    fill
                >
                    <Tab eventKey="all" title="Все" >
                        <History_audit_users_page/>
                    </Tab>
                    <Tab eventKey="now" title="Текущие аудиты">
                        
                        <History_audit_users_page/>
                    </Tab>
                    <Tab eventKey="past" title="Закрытые аудиты">
                    <History_audit_users_page/>
                    </Tab>
                </Tabs>                                
                </div>   
        <UnderBar/>   
      
    </>
    )
  }
  