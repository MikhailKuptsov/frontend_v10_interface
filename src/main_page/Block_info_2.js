import { useState } from "react";
import React from "react";
import { Row, Col, Button, Accordion} from "react-bootstrap";





export default function Block_info_2(){

    const fabrics_tests = [
        { title: 'УЛРЗ', pageLink: "/Data_page", id_item:"1"},
        { title: 'ЧЭРЗ', pageLink: "/Data_page", id_item:"2" },
        { title: 'ВТРЗ', pageLink: "Data_page", id_item:"3" },
        { title: 'УУЛВРЗ', pageLink: "/Data_page", id_item:"4"},
        { title: 'АТРЗ', pageLink: "/Data_page", id_item:"5"},
        { title: 'ЯЭРЗ', pageLink: "/Data_page", id_item:"6"},
        { title: 'ОЛРЗ', pageLink: "/Data_page", id_item:"7"},
        { title: 'РЭРЗ', pageLink: "/Data_page", id_item:"8"},
      ];
    
    const person_test = [
        { title: 'Менеджмент', pageLink: "test_page_v2/management/ЯКВ/Менежмент/13:30"},
        { title: 'Подготовка производства', pageLink: "/test_menejment"},
        { title: 'SF-m Ручные операции', pageLink: "/test_menejment"},
        { title: 'SF-e оборудование', pageLink: "/test_menejment"},
        { title: 'ОТиБ', pageLink: "/test_menejment"},
        { title: 'Качество', pageLink: "/test_menejment" },
        { title: 'Техническое развитие', pageLink: "/test_menejment"},
      ];

    const[fabric_value,setFabricValue]=useState("")
    const[test_value,setTest_value]=useState("")
    
    console.log(fabric_value,test_value)

    // function reset_audit_data(){
    //     setFabricValue("")
    //     setTest_value("")
    // }

    function Create_url(fabric_1,test_1){
        const url_link = "test_page_v2/management/"+fabric_value+'/'+test_value+"/13:30"
        return(url_link)
    }

    
    // {person_test.pageLink}
    // генерируемый список тестов аудитов
    const listItemsButtons = person_test.map( person_test =>
            <Row><Button style={{marginTop:"10px"}}  href={Create_url(fabric_value,test_value)} variant="outline-dark" size="lg" onClick={()=>setTest_value(person_test.title)}>{person_test.title}</Button></Row>
        );

    // генерируемый список заводов
    const listItemsCards = fabrics_tests.map( fabrics_tests =>
        <Accordion.Item eventKey={fabrics_tests.id_item} onClick={() =>setFabricValue(fabrics_tests.title)}>
            <Accordion.Header>
                <h4>{fabrics_tests.title}</h4>
            </Accordion.Header>
            <Accordion.Body>
                {listItemsButtons}
            </Accordion.Body>
        </Accordion.Item>
    );

    const Block_style={maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"2%", marginRight:"2%" };

    return(
        <>
        <center>
            {/* <Button onClick={() =>setFabricValue("рут")}>Кнопка</Button> */}
            <Accordion className="main_page_card" defaultActiveKey="0" >
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <Col>
                            <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>Мои аудиты</h2></Row>
                            <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>Список моих аудитов</p></Row> 
                        </Col>
                    </Accordion.Header >
                    {/* Вот здесь должна быть генерируемый список заводов и аудитов */}
                    <Accordion.Body >
                        <Row>
                            <Accordion defaultActiveKey="0">
                                
                                {listItemsCards}
                            </Accordion>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </center>
        </>
    );
}