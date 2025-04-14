import React, { useState } from "react";
import { Row, Col, Button, Accordion, Form, Table, Dropdown, Container, Modal, Stack} from "react-bootstrap";

import Organize_form from "./organize_form";
import EventForm from "./Block_info_form_v2";
import "./main_page_css.css"

export default function Block_info_form() {
    
    return (

    //   <Row>{listItems}</Row>
    <>
            
            <Accordion className="main_page_card" defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>Быстро спланировать аудит</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>Форма для быстрой организации аудита</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                {/* Содержимое блока формы */}

                {/* <Organize_form/> */}
                <EventForm/>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            

           
            </>
    
    );
  }