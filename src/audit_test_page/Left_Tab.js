import React from "react";
import { Nav } from "react-bootstrap";

export default function Left_Tab(){
    return(
        <Nav variant="pills" className="flex-column" >
            <Nav.Item >
                <Nav.Link eventKey="first">M1 Достижение ключевых показателей эффективности завода</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">М2 Эталонный поток изготовления продукции</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}