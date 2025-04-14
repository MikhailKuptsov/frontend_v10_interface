import React, { useState } from 'react';
import { Row, Col, Button, Accordion } from 'react-bootstrap';


export default function Block_user_control({items}){
    return(
        <>
        <Accordion className="main_page_card" defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 className='card_value' style={{color:"#1c3572"}}>{items.label_name}</h2></Row>
                    <Row><p className='card_value' style={{color:"#1c3572"}}>{items.curent_name}</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Button size='lg' className='main_page_button' variant='outline-dark' href={items.link_page} >Выбрать</Button>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}
