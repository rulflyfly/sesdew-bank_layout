import React from 'react';
import { Link } from 'react-router-dom';

import './nav-main.css';
import  Avatar from "../../images/avatar.png";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="user">
                <img className="user__avatar" src={ Avatar } alt="Аватар"/>
                <div className="user__name"> 
                <div className="user__lastname">Судничников</div>
                <div className="user__firstname">Андрей</div>
                </div>
            </div>
            <ul className="menu">
                <li className="menu-item menu-item_active"><Link className="menu-item__link" to='dashboard'>Главная</Link></li>
                <li className="menu-item"><Link className="menu-item__link" to="something">Аккаунт</Link></li>
                <li className="menu-item"><a className="menu-item__link" href="#">Помощь</a></li>
            </ul>
            <div className="nav__btns">
                <Link className="btn-item exit__btn" to="/">Выход</Link>
            </div>
        </nav>
    )
}

export default Nav;