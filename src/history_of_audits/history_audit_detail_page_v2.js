import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Tabs, Tab} from "react-bootstrap";


//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты
import DataTable from "./table_test_3";

//стили
import "./planning_history_audit_style.css"


import { Accordion, Button, Card, Table} from "react-bootstrap";



export default function History_audit_detial_page_v2(){
    
    return(
        <>
        <Main_Header/>
                <div className="block_page_planning_history"> 
                    <div>
                        <div className="block_page_planning_audits">
                            <DataTable/>
                        </div>  
                    </div>   
                </div>
                <UnderBar/>        
        </>
    )
}

