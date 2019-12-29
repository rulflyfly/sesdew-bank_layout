import React from 'react';
import { Redirect } from 'react-router-dom';

import './login.css';

const LoginPage = ({ isLoggedIn, onLogin }) => {


    if (!isLoggedIn ) {
        return (
            <div className="body__bg">
            <div className="signin__container">
                <hr className="delimiter"/>
                <form className="signin__form" action="#">
                <h2 className="signin__welcome">Добро пожаловать!</h2>
                <input className="signin__login" type="text" name="login" placeholder="Логин"/>
                <input className="signin__password" type="password" name="password" placeholder="Пароль"/>
                <input className="signin__submit" type="button" value="Вход"
                 onClick={onLogin}/>
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