import React from 'react';
import { Link } from 'react-router-dom';

import  Avatar from "../../images/avatar.png";

import './nav-main.css';

const NavClients = () => {
    return (
        <nav className="nav">
            <div className="user"><img className="user__avatar" src={ Avatar } alt="Аватар"/>
                <div className="user__name"> 
                <div className="user__lastname">Судничников</div>
                <div className="user__firstname">Андрей</div>
                </div>
            </div>
            <div className="nav__btns"> 
                <Link className="btn-item" to='/main-page/nav-user-profile/page-one' >
                    <i className="icon-plus"> </i>
                    <p>Добавить Клиента</p>
                </Link>
                <Link className="btn-item" to='/main-page/dashboard'>
                    <i className="icon-main_menu"> </i>
                    <p>Вернуться в главное меню</p>
                </Link>
            </div>
       </nav> 
    )
}

export default NavClients;