import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card} from 'react-bootstrap';

import Warning_password from './warning';
import "./auth_page_style.css";

import "./auth_page_style.css";

export default function Auth_page(){
    const [data, setData] = useState({ username_or_email: "", password: "" });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange=(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data)
        navigate('/Main_page')
    }

    //предупреждение о нажатом CapsLock
    const [capsLockActive, setCapsLockActive] = useState(false);
    const handleKeyDown = (event) => {
        setCapsLockActive(event.getModifierState('CapsLock'));
      };
    
    return(
        <>
        <div className='block_page_auth'>
            <Card className='card_block'>
            <form >
                <h2>Авторизация</h2>
                {error && (<p className="warning_p">Неправильно введен логин или пароль</p>)}
                <label>Логин:</label>
                <input 
                // type='email'
                type='text'
                className='auth_input'
                name='username_or_email'
                value={data.username_or_email}
                onChange={handleChange} 
                required
                /><br/>
                <label>Пароль:</label><br/>
                <input
                type='password'
                className='auth_input'
                name='password'
                value={data.password}
                onChange={handleChange}
                onKeyDown={handleKeyDown} 
                onKeyUp={handleKeyDown} 
                required
                /><br/>
                {capsLockActive && (<p className="warning_p">*У вас нажат CapsLock</p>)}
                <Button className='auth_button' type='submit' variant='outline-dark' href='/Main_page'>Отправить</Button>
                <Warning_password/>
            </form>
            </Card>
        </div>
        </>
    )
}