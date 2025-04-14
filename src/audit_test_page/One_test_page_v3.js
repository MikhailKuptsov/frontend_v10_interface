import React from "react";

//компоненты Bootstrap
import { Nav,Col, Row, Tab, Tabs  } from "react-bootstrap";

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
import Test_text from "./test_text";
import Tabs_block_content from "./tabs_block_content";

import { useParams } from "react-router"

// const fabric_name="УЛРЗ";
// const test_name="M1 Достижение ключевых показателей эффективности завода";
// const time="";


export default function One_test_page_v3({category}){
    const {fabric_name_2}=useParams();
    const {audit_name}=useParams();
    const {time_2}=useParams();



    const list_of_tabs=category.map(a=>
        <Nav.Item >
            <Nav.Link eventKey={a.id}>{a.name}</Nav.Link>
        </Nav.Item>
    )
    const list_of_blocks=category.map(a => 
        <Tab.Pane eventKey={a.id}>
            <h2 style={{margin:"10px"}}>{a.name}</h2>
            <Tabs_block_content test_text_value={a.test_text_value}/>
        </Tab.Pane>
    );
        

    const MyStyle={minHeight:"700px",marginBottom:"30px"};
    return(
        <>
        {/* нужно сделать Навбар с предупреждением */}
        <Main_Header/>

        {/* Весь блок */}
        <div style={MyStyle}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="1" >
            {/* Боковая панель */}
            <Row>
                <Col sm={3}>

                    <div style={{margin:"20px"}}>
                        <h2>{fabric_name_2}</h2>
                        <h3>{audit_name}</h3>
                        <h4>Время окончания аудита: {time_2}</h4>
                    </div>

                    <Nav variant="pills" className="flex-column" >
                        {/* <Nav.Item >
                        <Nav.Link eventKey="1">{category_1.name}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="2">М2 Эталонный поток изготовления продукции</Nav.Link>
                        </Nav.Item> */}
                        {list_of_tabs}
                    </Nav>

                </Col>
                {/* Страница выбранного значения из боковой панели */}
                <Col sm={9}>
                    <Tab.Content>
                        {/* <Tab.Pane eventKey="1">
                            <Tabs_block_content test_text_value={category_1.test_text_value}/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="2">
                            содержимое
                        </Tab.Pane> */}
                        {list_of_blocks}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </div>
        <UnderBar/>
        </>
    )
}