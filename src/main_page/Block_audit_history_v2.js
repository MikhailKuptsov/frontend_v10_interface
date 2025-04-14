import React, { useState } from 'react';
import { Row, Col, Button, Accordion } from 'react-bootstrap';

import "./main_page_css.css"

export default function Block_audit_history_v2(){
    return(
        <>
        <Accordion className="main_page_card" defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>История организованных аудитов</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>Список орагизованных аудитов</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Button size='lg' style={{width:"100%"}} variant='outline-dark' href='/Planning_history_audit_page'>Выбрать</Button>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}
