import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Стили
import "./test_name_page_css.css"



import { Button, Card } from "react-bootstrap";


export default function Edit_test_page(){
    const [testNameData, setTestNameData]=useState({test_name:""})

    const handleChange=(event)=>{
        setTestNameData({...testNameData, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(testNameData)
        // navigate('/Tests_name_page')
    }


    return(
        <>
        <Main_Header/>
        <div className="block_page_create_test">
            <div >
                <Card className="card_form_create_test">
                    <Card.Header>
                        <h3>Редактировать раздел</h3></Card.Header>
                    <Card.Body><div>
                    <form onSubmit={handleSubmit}>
                        <label>Введите название теста:</label><br/>
                        <input
                        className="card_input_style"
                        type="text"
                        placeholder="введите название теста"
                        name="test_name"
                        value={testNameData.test_name}
                        onChange={handleChange}
                        /><br/>
                        <Button type="submit" className="tasks_buttons_style" variant="dark" size="lg">Создать тест</Button>
                    </form>
                </div></Card.Body>
                </Card>
            </div>
        </div>
        <UnderBar/>
        </>
    )
}