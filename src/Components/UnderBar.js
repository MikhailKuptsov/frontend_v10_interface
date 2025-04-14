import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container } from "react-bootstrap";

export default function UnderBar(){
    const background_color_main="#1c3572";
    return(
        <>
        <Navbar collapseOnSelect expand="md"
        style={{backgroundColor:background_color_main}}
         variant="dark">
                <Container >
                    <div style={{marginTop:"10px"}}>
                        <p style={{color:"white"}}>Контактная информация:</p><br/>
                        <p style={{color:"white"}}>Техническая поддержка:</p>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}