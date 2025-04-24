import React, { useState } from 'react';
import { Row, Col, Button, Accordion} from 'react-bootstrap';

//Персональные компоненты
import Modal_status_audit from './modal_status_audit';
import Modal_grafics_audit from './modal_grafics_audit';

//Стили
import "./main_page_css.css"




export default function Block_select_audit({info}){
    const audit_info=[{
        fabric_name:"ВТРЗ",
        date_start:"10.11.2023",
        date_end:"13.12.2023",
        tests:[{test_name:"менеджмент",test_href:"/test_page_v4"}, {test_name:"ОТиБ",test_href:"/test_page_v4"}]}]
        
    const type_of_users=["admin","moderator","moderator_create_audit","moderator_check_results","auditor","worker_RPS"]
    let flag=type_of_users[0];

    const audit_accordions=audit_info.map((item, index)=> 
    // <Card>
    //     <Card.Header>
    //     <h5>{item.fabric_name}</h5>
    //     <p>{item.date_start} -- {item.date_end}</p>
    //     </Card.Header>
        
    // </Card>
    
    <Accordion.Item eventKey={index}>
        <Accordion.Header>
            <div>
            <h4 className='accordion_header_style'>{item.fabric_name}</h4>
            <p className='accordion_text_style'>{item. date_start} -- {item. date_end}</p>
            </div>
        </Accordion.Header>
        <Accordion.Body>
            {/* {(flag==="admin" || flag==="auditor")?<Button size='lg' style={{width:"100%",margin:"5px"}} variant='outline-dark' >Проверить состояние</Button>:null} */}
            {(flag==="admin" || flag==="auditor")?<Modal_status_audit info={{button_label:"Проверить состояние"}}/>:null}
            {(flag==="admin" || flag==="auditor")?<Modal_grafics_audit info={{button_label:"Текущий график аудита"}}/>:null}
            {/* {(flag==="admin" || flag==="auditor")?<Button size='lg' style={{width:"100%",margin:"5px"}} variant='outline-dark'>Текущий график аудита</Button>:null} */}
            <h3>Назначенные разделы:</h3>
            {item.tests.map(item_2=><Button size='lg' variant='outline-dark' 
            style={{width:"100%",margin:"5px"}} 
            // className='button_test_style'
            href={item_2.test_href}>{item_2.test_name}</Button>)}
        </Accordion.Body>
    </Accordion.Item> 
    )
    
    return(
        <>
        <Accordion className="main_page_card" defaultActiveKey="key_0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {/* Заголовок */}
                <Col>
                    <Row><h2 className='accordion_header_style'>{info.lable}</h2></Row>
                    <Row><p className='accordion_text_style'>{info.sub_level}</p></Row> 
                    </Col>
                  
              </Accordion.Header >
              <Accordion.Body >
                <Accordion defaultActiveKey="key_1">
                {/* <Button size='lg' style={{width:"100%"}} variant='outline-dark' href={info.link_page}>Выбрать</Button> */}
                {audit_accordions}
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}
