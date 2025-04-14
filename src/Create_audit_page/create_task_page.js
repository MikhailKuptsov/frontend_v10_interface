import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Стили
import "./test_name_page_css.css"



import { Button, Card } from "react-bootstrap";


export default function Create_task_page(){
    const test_name_lable="Менеджмент"
        const subtest_name_lable="М1_менеджмент"
        const level_name_lable="уровень 1"
    
    
    const [eventData, setEventData] = useState({
            test_name: test_name_lable,
            subtest_name: subtest_name_lable,
            level_name: level_name_lable,
          });

    const [testNameData, setTestNameData]=useState({
        value_1:"",
        value_2:"",
        value_3:"",
        access_anser_yes_no: false,
        access_file:false,
        access_access_comments:false})

    const handleChange=(event)=>{
        setTestNameData({...testNameData, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const combinedData = {
            eventData,
            testNameData
          };
        console.log(combinedData )
        // navigate('/Tests_name_page')
    }


    return(
        <>
        <Main_Header/>
        <div className="block_page_create_test">
            <div >
                <Card className="card_form_create_test">
                    <Card.Header>
                        <h3>Создать новый пункт</h3></Card.Header>
                    <Card.Body><div>
                    <form onSubmit={handleSubmit}>
                        <div className='form_element_2'>
                            <label>Название раздела</label><br/>
                            <input value={eventData.test_name} readonly="readonly"/>
                        </div>
                        <div className='form_element_2'>
                            <label>Название подраздела</label><br/>
                            <input value={eventData.subtest_name} readonly="readonly"/>
                        </div>
                        <div className='form_element_2'>
                            <label>Название раздела</label><br/>
                            <input value={eventData.level_name} readonly="readonly"/>
                        </div>
                        <div className='form_element_2'>
                            <label htmlFor={`value_1`}>Требования дорожной карты ПС ЖДРМ. Как достичь:</label><br/>
                            <textarea
                            style={{width:"100%"}}
                            type="text-aria"
                            id={`value_1`}
                            name="value_1"
                            checked={testNameData.value_1}
                            onChange={handleChange}
                            />
                        </div>

                        <div className='form_element_2'>
                            <label htmlFor={`value_2`}>Контрольный элемент. метод контроля:</label><br/>
                            <textarea
                            style={{width:"100%"}}
                            type="text-aria"
                            id={`value_2`}
                            name="value_2"
                            checked={testNameData.value_2}
                            onChange={handleChange}
                            />
                        </div>
                        <div className='form_element_2'>
                            <label htmlFor={`value_3`}>Список мероприятии:</label><br/>
                            <textarea
                            style={{width:"100%"}}
                            type="text-aria"
                            id={`value_3`}
                            name="value_3"
                            checked={testNameData.value_3}
                            onChange={handleChange}
                            />
                        </div>
            
                    <div className='form_element_2'>
                        <label htmlFor={`access_anser_yes_no`}>формат ответа Да/нет:</label>
                        <input
                        type="checkbox"
                        id={`access_anser_yes_no`}
                        name="access_anser_yes_no"
                        checked={testNameData.access_anser_yes_no}
                        onChange={handleChange}
                        />
                    </div>

                    <div className='form_element_2'>
                        <label htmlFor={`access_file`}>Отправка файла:</label>
                        <input
                        type="checkbox"
                        id={`access_file`}
                        name="access_file"
                        checked={testNameData.access}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='form_element_2'>
                        <label htmlFor={`access_comments`}>Доступ к результатам:</label>
                        <input
                        type="checkbox"
                        id={`access_comments`}
                        name="access_comments"
                        checked={testNameData.access_comments}
                        onChange={handleChange}
                        />
                    </div>
                        
                        <Button type="submit" className="tasks_buttons_style" variant="dark" size="lg">Создать подраздел</Button>
                    </form>
                </div></Card.Body>
                </Card>
            </div>
        </div>
        <UnderBar/>
        </>
    )
}