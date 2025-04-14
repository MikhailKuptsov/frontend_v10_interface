import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import image2 from '../Images/blue.png';

//стили
import "./Admin_page_style.css"

function Create_url(username_log){
  const url_link = "/Person_information_page/"+username_log
  return(url_link)
}

export default function Person_card_2({info}){
        return (
          <div>
            <Card className="cards_style">
              {/* <Card.Img variant="top" src={image2} /> */}
              <Card.Body>
                <Card.Title>
                  <h5>{info.username_1}</h5>
                  <h5>{info.name_1} </h5>
                  <h5>{info.surname_1}</h5></Card.Title>
                
                <Button variant="outline-dark" className="admin_buttons_style" 
                // href={Create_url(info.username_1)}
                href="/Edit_person_page"
                >Редактировать профиль</Button>
                <Button variant="outline-danger" className="admin_buttons_style" 
                // href={Create_url(info.username_1)}
                >Удалить профиль</Button>
              </Card.Body>
            </Card>
            </div>
          );
    }
  
