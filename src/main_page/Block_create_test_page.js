import React, { useState } from 'react';
import { Row, Col, Button, Accordion } from 'react-bootstrap';

import "./main_page_css.css"

export default function Block_create_test_page(){
    return(
        <>
        <Accordion className="main_page_card" defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 className='card_value'>Изменение формулировок текста ДК ТОС</h2></Row>
                    <Row><p className='card_value'>Изменение и создание новых тестов для аудитов</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Button size='lg' className='main_page_button' variant='outline-dark' href='/Tests_name_page'>Выбрать</Button>
                
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}
