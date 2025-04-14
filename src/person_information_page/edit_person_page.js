import React, {useState} from "react";
import { Card, Button,Col,Row, Form, Stack} from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
// import axios from "axios";

// import user_attributes from "../admin_page/User_data";

import "./person_information_page_css.css"

// const api_key=user_attributes.api_session_key;

export default function Edit_person_page(){
    //ХУК в котором будет сохраняться значение из полей формы о пользователе
    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        patronymic: '',
        email: '',
        password: '',
        job_title: '',
        username:'',
        // phone_number:'',
        role: 'User', // Значение по умолчанию
      });
      

    //Сохранение данных в ХУК
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
    //Отправка ХУКА с данными в консоль
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Форма отправлена:', formData);
        // axios.post("https://9l1rs9ln-8000.euw.devtunnels.ms/users/add", formData ,{headers:{'api-session-key':api_key}})
        // .then((response) => {
        //     console.log("Данные отправлены");
        // })
        console.log(formData)
    };

    

    return(
        <>
        <Main_Header/>
        <div className="block_page_2">
            <div><h1>Редактировать данные</h1></div>
            {/* <div className="buttons_list">
                <div className="buttons_style_1"><Button variant="success">Сохранить</Button></div>
                <div className="buttons_style_1"><Button variant="danger">Удалить</Button></div>
            </div> */}
            <div className="form_block">
            <Card className="cardStyle_2">
                <Card.Body>
                <form onSubmit={handleSubmit}>
                <div className="form_element">
                    <label htmlFor="surname">Фамилия:</label> <br/>
                    <input
                    className="form_element_input"
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required // Сделаем поле обязательным для заполнения
                    />
                </div>

                <div className="form_element">
                    <label htmlFor="firstName">Имя:</label> <br/>
                    <input
                    className="form_element_input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form_element">
                    <label htmlFor="patronymic">Отчество:</label> <br/>
                    <input
                    className="form_element_input"
                    type="text"
                    id="patronymic"
                    name="patronymic"
                    value={formData.patronymic}
                    onChange={handleChange}
                    />
                </div>

                <div className="form_element">
                    <label htmlFor="email">Email:</label> <br/>
                    <input
                    className="form_element_input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form_element">
                    <label htmlFor="username">Логин:</label> <br/>
                    <input
                    className="form_element_input"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form_element">
                    <label htmlFor="password">Пароль:</label> <br/>
                    <input
                    className="form_element_input"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                {/* <div className="form_element">
                    <label htmlFor="position">телефон</label> <br/>
                    <input
                    type="phone"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    />
                </div> */}

                <div className="form_element">
                    <label htmlFor="job_title">Должность:</label> <br/>
                    <input
                    className="form_element_input"
                    type="text"
                    id="job_title"
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleChange}
                    />
                </div>

                <div className="form_element" >
                    <label htmlFor="role">Роль:</label><br/>
                    <select id="role" name="role" value={formData.role} onChange={handleChange}>
                    <option value="Admin">Админ</option>
                    <option value="Moderator">Модератор</option>
                    <option value="Auditor">Аудитор</option>
                    <option value="User">Пользователь</option>
                    </select>
                </div>
                
                <Button type="submit" variant="outline-success" style={{margin:"5px"}} size="lg">Создать пользователя</Button>
                </form>
                </Card.Body>
            </Card>
            </div>
        </div>
        <UnderBar/>
        </>
    );
}