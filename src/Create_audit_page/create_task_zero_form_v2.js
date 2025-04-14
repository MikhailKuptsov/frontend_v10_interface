import React, {useState} from "react";
import { useParams } from "react-router"

import { Button } from 'react-bootstrap';
export default function Create_task_from_zero_form_v2(){
    const test_name_lable="Менеджмент"
    const subtest_name_lable="М1_менеджмент"
    const level_name_lable="уровень 1"


    const [eventData, setEventData] = useState({
        test_name: test_name_lable,
        subtest_name: subtest_name_lable,
        level_name: level_name_lable,
      });
    
      const [peopleData, setPeopleData] = useState([
        {
            value_1:'',
            value_2:'',
            value_3:'',
            value_4:'',
            value_5:'',
            access_anser_yes_no: false,
            access_file:false,
            access_comments:false,
        },
      ]);
    
      const handleEventChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
      };
    
      const handlePlaceChange = (selectedOption) => {
        setEventData({ ...eventData, place: selectedOption.value });
      };
    
      const handlePeopleChange = (index, e) => {
        const updatedPeopleData = [...peopleData];
        if (e.target.type === 'checkbox') {
          updatedPeopleData[index] = {
            ...updatedPeopleData[index],
            [e.target.name]: e.target.checked,
          };
        } else {
          updatedPeopleData[index] = {
            ...updatedPeopleData[index],
            [e.target.name]: e.target.value,
          };
        }
        setPeopleData(updatedPeopleData);
      };
    
      const handleAddPerson = () => {
        setPeopleData([
          ...peopleData,
          {
            value_1:'',
            value_2:'',
            value_3:'',
            value_4:'',
            value_5:'',
            access_anser_yes_no: false,
            access_file:false,
            access_comments:false,
          },
        ]);
      };
    
      const handleDeletePerson = (index) => {
        const updatedPeopleData = [...peopleData];
        updatedPeopleData.splice(index, 1);
        setPeopleData(updatedPeopleData);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
          ...eventData,
          people: peopleData,
        };
    
        console.log(formData);
    
        setEventData({ test_name: test_name_lable,
            subtest_name: subtest_name_lable,
            level_name: level_name_lable, });
        setPeopleData([
          { value_1:'',
            value_2:'',
            value_3:'',
            value_4:'',
            value_5:'',
            access_anser_yes_no: false,
            access_file:false,
            access_comments:false,},
        ]);
      };
    
     
    
      
    
      
    
      return (
        <form onSubmit={handleSubmit}>
          <h2>Создание пунктов</h2>
    
          <div className='form_elements_v2' >
            <div className='form_element_1'>
              <label htmlFor="test_name">Название раздела:</label>
              <input
                type="text"
                id="test_name"
                name="test_name"
                value={eventData.test_name}
                readonly="readonly"
                
              />
            </div>
            <div className='form_element_1'>
              <label htmlFor="subtest_name">Название подраздела:</label>
              <input
                type="text"
                id="subtest_name"
                name="subtest_name"
                value={eventData.subtest_name}
                readonly="readonly"
                
              />
            </div>
            <div className='form_element_1'>
              <label htmlFor="level_name">Название уровня:</label>
              <input
                type="text"
                id="level_name"
                name="level_name"
                value={eventData.level_name}
                readonly="readonly"
              />
            </div>
          </div>
          
    
          <h3>Введите пункты</h3>
    
          {peopleData.map((person, index) => (
            <div key={index} style={{border: "2px solid black", borderRadius:"5px",margin:"5px"}}>

                <div className='form_element_2'>
                    <p>Пункт №{index+1}</p>
                    <label htmlFor={`value_1-${index}`}>Требования дорожной карты ПС ЖДРМ. Как достичь:</label><br/>
                    <textarea
                    style={{width:"100%"}}
                    type="text-aria"
                    id={`value_1-${index}`}
                    name="value_1"
                    checked={person.value_1}
                    onChange={(e) => handlePeopleChange(index, e)}
                    />
                </div>

                <div className='form_element_2'>
                    <label htmlFor={`value_2-${index}`}>Контрольный элемент. метод контроля:</label><br/>
                    <textarea
                    style={{width:"100%"}}
                    type="text-aria"
                    id={`value_2-${index}`}
                    name="value_2"
                    checked={person.value_2}
                    onChange={(e) => handlePeopleChange(index, e)}
                    />
                </div>
                <div className='form_element_2'>
                    <label htmlFor={`value_3-${index}`}>Список мероприятии:</label><br/>
                    <textarea
                    style={{width:"100%"}}
                    type="text-aria"
                    id={`value_3-${index}`}
                    name="value_3"
                    checked={person.value_3}
                    onChange={(e) => handlePeopleChange(index, e)}
                    />
                </div>
    
              <div className='form_element_2'>
                <label htmlFor={`access_anser_yes_no-${index}`}>формат ответа Да/нет:</label>
                <input
                  type="checkbox"
                  id={`access_anser_yes_no-${index}`}
                  name="access_anser_yes_no"
                  checked={person.access_anser_yes_no}
                  onChange={(e) => handlePeopleChange(index, e)}
                />
              </div>

              <div className='form_element_2'>
                <label htmlFor={`access_file-${index}`}>Отправка файла:</label>
                <input
                  type="checkbox"
                  id={`access_file-${index}`}
                  name="access_file"
                  checked={person.access}
                  onChange={(e) => handlePeopleChange(index, e)}
                />
              </div>
              <div className='form_element_2'>
                <label htmlFor={`access_comments-${index}`}>Доступ к результатам:</label>
                <input
                  type="checkbox"
                  id={`access_comments-${index}`}
                  name="access_comments"
                  checked={person.access_comments}
                  onChange={(e) => handlePeopleChange(index, e)}
                />
              </div>
    
              <Button style={{margin:"5px"}} type="button" variant='outline-danger' onClick={() => handleDeletePerson(index)}>
                Удалить пункт
              </Button>
            </div>
          ))}
          
          <div >
          <Button type="button" style={{margin:"5px"}} variant='outline-dark' onClick={handleAddPerson}>
            Добавить пункт
          </Button>
    
          <Button type="submit" style={{margin:"5px"}}  variant='outline-success' >Оформить тест</Button>
          </div>
        </form>
      );
    
}