
import React, { Component } from "react";
import logo from './logo1.png'
import { Navbar, Nav, NavLink, Container,  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./main_header_underbar_css.css";



export default function Main_Header(){

    let flag="Admin"
    // console.log(flag);
    const background_color_main="#1c3572";

    return(
            <>
            {/* fixed="top" - прибить navbar на верхрей части сайта постоянно*/}
            <Navbar collapseOnSelect expand="md"  
            style={{backgroundColor:background_color_main}}
            variant="dark" 
            >
                <Container  >
                    {/* Логотип */}
                    <Navbar.Brand href="https://ao-zdrm.ru/">
                         <img 
                            src={logo}
                            height="70"
                            width="auto"
                            className="d-inline-block aline-top"
                            alt="Logo" 
                        />
                    </Navbar.Brand>
                    {/* Кнопка которая будет появляться после уменьшения экрана */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink href="/Main_page">Главная страница</NavLink>
                            {flag==="Admin"?<NavLink href="/Admin_page">Администратор</NavLink>:null}
                            {/* <NavLink href="/Admin_page">Администратор</NavLink> */}
                            <NavLink href="/">Выход</NavLink>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
} 

