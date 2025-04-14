import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//стили


export default function Settings_page(){
    let flag="Admin"
    return(
        <>
        <Main_Header/>
        <div className="block_page">
            <h1>Настройки сайта</h1>

        </div>
        <UnderBar/>        
        </>
    )
};