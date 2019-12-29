import React from 'react';
import { Link } from 'react-router-dom';

import './nav-main.css';
import  Avatar from "../../images/avatar.png";

const NavProfile = () => {
    return (
        <nav className="nav">
          <div className="user"><img className="user__avatar" src={ Avatar } alt="Аватар"/>
            <div className="user__name"> 
              <div className="user__lastname">Судничников</div>
              <div className="user__firstname">Андрей</div>
            </div>
          </div>
          <ul className="menu">
            <li className="menu-item">
                <Link className="menu-item__link" to="/main-page/nav-user-profile/page-one">Основная информация<i className="icon-yes"></i>
                </Link>
            </li>
            <li className="menu-item">
                <Link className="menu-item__link" to='/main-page/nav-user-profile/page-two'>Сведения о доходах<i className="icon-yes"></i>
                </Link>
            </li>
            <li className="menu-item">
                <Link className="menu-item__link menu-item_active" to='/main-page/nav-user-profile/page-three'>Дополнительные сведения<i className="icon-yes"></i>
                </Link>
            </li>
            <li className="menu-item">
                <Link className="menu-item__link" to='/main-page/nav-user-profile/page-four'>Выбор банков
                </Link>
            </li>
          </ul>
          <div className="nav__btns">
            <Link className="btn-item" to='/main-page/dashboard'>
                <i className="icon-main_menu"> </i>
                <p>Вернуться в главное меню</p>
            </Link>
          </div>
        </nav>
    )
}

export default NavProfile;