import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//персональные компоненты
import Create_test_window from "./Create_test_window";
import Warning_detele_subtest from "./warning_delete_subtest";

//Стили
import "./test_name_page_css.css"



import { Button, Card } from "react-bootstrap";


export default function Subtest_name_page(){
    return(
        <>
        <Main_Header/>
        <div className="block_page_create_test">
            <div className="block_header_page">
                <h1>Список подразделов раздела *название теста*</h1>
            </div> 
            <div className="button_create">
                <Button className="button_test_style" variant="outline-dark" size="lg" href="/Create_subtest_page">Создать новый подраздел</Button>
                {/* <Create_test_window/> */}
            </div>
            
                <div className="cards_tests_place">
                    
                    <Card className="cards_style_tests">
                        <Card.Header>
                            <h4> Заголовок подраздела</h4>
                        </Card.Header>
                        <Card.Body className="cards_body_tests_buttons_place">
                            <Button className="cards_body_tests_buttons" variant="outline-dark" href="/Level_name_page">Выбрать</Button>
                            <Button className="cards_body_tests_buttons" variant="outline-dark" href="/Edit_subtest_page">Редактировать название</Button>
                            <Warning_detele_subtest/>
                        </Card.Body>
                    </Card>
                    
                    

                </div>
                    
        </div>
        <UnderBar/>
        </>
    )
}