import React, { useState } from 'react';
import { Row, Col, Button, Accordion } from 'react-bootstrap';

import "./main_page_css.css"

export default function Dropdown_block_choose({info}){
    return(
        <>
        <Accordion className="main_page_card" defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2  className='accordion_header_style'>{info.lable}</h2></Row>
                    <Row><p className='accordion_text_style'>{info.sub_level}</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Button size='lg' style={{width:"100%"}} variant='outline-dark' href={info.link_page}>Выбрать</Button>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}
