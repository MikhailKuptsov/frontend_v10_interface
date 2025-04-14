import React, { useState, useEffect} from 'react';

import { Button} from "react-bootstrap";

//Общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";


//Персональные компоненты
import Person_card_2 from './Card_person_v3';


//Стили
import "./Admin_page_style.css"




export default function Admin_page_users() {

    return (
        <div>
            <Main_Header/>
            <div className="block_page_1">
            <div className="block_header_admin">
                <h1>Список пользователей</h1>
            </div>
            <div className="button_style">
                <Button variant="outline-dark" href="/create_person_page" size="lg">
                    Создать пользователя
                </Button>
            </div>
            <div className="cards_place">
            <Person_card_2 info={{username_1: "админ" , name_1: "админов", surname_1: "admin" }}/>
            <Person_card_2 info={{username_1: "админ" , name_1: "админов", surname_1: "admin" }}/>
            <Person_card_2 info={{username_1: "админ" , name_1: "админов", surname_1: "admin" }}/>
            <Person_card_2 info={{username_1: "админ" , name_1: "админов", surname_1: "admin" }}/>
            <Person_card_2 info={{username_1: "админ" , name_1: "админов", surname_1: "admin" }}/>
            </div>
            

            </div>
            <UnderBar/>
        </div>
        );    
};

