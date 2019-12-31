import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './login.css';

const LoginPage = ({ isLoggedIn, onLogin }) => {
    
    const [ validated, setValidated ] = useState(false);
    const { register, handleSubmit } = useForm()

    const onSubmit = () => {
        setValidated(true);
    }

    if (!isLoggedIn ) {
        return (
            <div className="body__bg">
            <div className="signin__container">
                <hr className="delimiter"/>

                <form className="signin__form" 
                 onSubmit={handleSubmit(onSubmit)}>

                <h2 className="signin__welcome">Добро пожаловать!</h2>

                <input className="signin__login" 
                 type="text" 
                 name="login" 
                 placeholder="Логин" 
                 ref={register({ required: true })}/>

                <input className="signin__password" 
                 type="password" 
                 name="password" 
                 placeholder="Пароль" 
                 ref={register({ required: true })}/>

                <input className="signin__submit" type="submit" value="Вход"
                 onClick={() => onLogin(validated)}/>
                </form>
            </div>
            <div className="author">
                <p className="author__description">designed by Andrew S.</p>
                <p className="author__email"> <a href="mailto:design@sdew.ru">design@sdew.ru</a></p>
            </div>
            </div>
        )
    } else {
       return  <Redirect to='/main-page/dashboard' />
    }
}

export default LoginPage;