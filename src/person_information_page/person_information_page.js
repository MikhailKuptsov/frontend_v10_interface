import React, {useState} from "react";
import { Card, Button,Col,Row, Form, Stack} from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

import "./person_information_page_css.css"


export default function Person_information_page(){
    const [state, setState] = useState({
        firstname:"",
        name:"",
        lastname:"",
        job_title:"",
        email: "",
        password: "",
        admin_rights:false,
        user_rights:true
      });

    const handleInputChange = (event) => {
        const { a, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [a]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      };

    

    return(
        <>
        <Main_Header/>
        <div className="block_page_2">
            <div><h1>Профиль</h1></div>
                        
        </div>
        <UnderBar/>
        </>
    );
}