import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Form, FormControl, Dropdown, Stack} from "react-bootstrap";
//Общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
import Block_user_control from './block_user_control';


//Стили
import "./Admin_page_style.css"




export default function Admin_page() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    return (
        <div>
            <Main_Header/>
            <div className="block_page">
                
                <Block_user_control items={{
                    label_name:"Настройка пользователей", 
                    curent_name:"Изменение и добавление новых пользователей",
                    link_page:"/Admin_page_users"}}/>
                <Block_user_control items={{
                    label_name:"Настройки", 
                    curent_name:"Изменение и добавление параметров сайта",
                    link_page:"/Admin_page_settings"}}/>


            </div>
            <UnderBar/>
        </div>
        );    
};

