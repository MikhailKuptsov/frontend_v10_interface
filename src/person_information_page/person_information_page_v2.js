import React, {useState,useEffect} from "react";
import { useParams } from "react-router"
import { Card, Button,Col,Row, Form, Stack} from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

import { getSimpleUser } from "./get_simple_user";

import "./person_information_page_css.css"


export default function Person_information_page_v2(){
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {username_log}=useParams();
    
    useEffect(() => {
            const fetchUsersSimple = async () => {
              setLoading(true);
              setError(null);
              try {
                const data = await getSimpleUser(username_log);
                if (data === "данных нет") {
                    setUserData([]); // Или можно оставить как есть, если хотите отображать сообщение об отсутствии данных
                  setError("Данных о пользователях нет.");
                } else {
                    setUserData(data);
                }
              } catch (err) {
                setError("Ошибка при загрузке данных.");
                console.error(err); // Логируем ошибку, чтобы видеть её в консоли
              } finally {
                setLoading(false);
              }
            };
        
            fetchUsersSimple();
          }, []);

    return(
        <>
        <Main_Header/>
        <div className="block_page_2">
            <div><h1>Профиль</h1></div>
             {loading ? (<p>Загрузка...</p>) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
            ) : userData.length > 0 ? (
            //Если пользователи есть и соединение с бэком есть, то: 
            <div>
                {userData.map(user => (
                                // <li key={user.id}>
                                // <strong>ID:</strong> {user.id}, 
                                // <strong>Имя:</strong> {user.name}, 
                                // <strong>Email:</strong> {user.email}
                                // {/*  Добавьте другие поля пользователя, которые хотите отображать */}
                                // </li>
                                <p>{user.username}</p>
                            ))}
                            </div>
                        ) : (
                          //если пользователей нет выводится надпись:
                            <p>Нет данных о пользователях.</p>
                        )}          
            
        </div>
        <UnderBar/>
        </>
    );
}