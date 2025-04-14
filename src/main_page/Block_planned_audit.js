import React, { useState } from 'react';
import { Row, Col, Button, Accordion } from 'react-bootstrap';

import "./main_page_css.css"

export default function Block_planned_audit(){
    return(
        <>
        <Accordion className="main_page_card" defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>Спланировать аудит</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>Форма для организации аудита</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Button size='lg' style={{width:"100%"}} variant='outline-dark' href='/Planning_audit_page'>Выбрать</Button>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}
