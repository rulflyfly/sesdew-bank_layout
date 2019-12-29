import React from 'react';
import { Link } from 'react-router-dom';

import './nav-main.css';
import  Avatar from "../../images/avatar.png";


const NavBanks = () => {
    return (
        <nav class="nav">
            <div class="user"><img class="user__avatar" src={ Avatar } alt="Аватар"/>
                <div class="user__name"> 
                <div class="user__lastname">Судничников</div>
                <div class="user__firstname">Андрей</div>
                </div>
            </div>
            <div class="nav__btns">
                <Link class="btn-item" to='/edit-bank'>
                    <i class="icon-plus"> </i>
                    <p>Добавить банк</p>
                </Link>
                <Link class="btn-item" to='/main-page/dashboard'>
                    <i class="icon-main_menu"> </i>
                    <p>Вернуться в главное меню</p>
                </Link>
            </div>
        </nav>
    )
}

export default NavBanks;