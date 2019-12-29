import React from 'react';
import { Link } from 'react-router-dom';

import  Avatar from "../../images/avatar.png";

import './edit-bank.css';

const EditBank = () => {
    return (
        <div className="bank-table-container">
    <nav className="toolbox">
      <div className="left-tool">
        <div className="user"><img className="user__avatar" src= { Avatar } alt="Аватар"/>
          <div className="user__name"> 
            <div className="user__lastname">Судничников</div>
            <div className="user__firstname">Андрей</div>
          </div>
        </div>
        <div className="tools"><a className="tools__btn add-col" href="#"></a><a className="tools__btn add-row" href="#"></a><a className="tools__btn del-row" href="#"></a><a className="import-btn" href="#">Импортировать из Excel</a></div>
      </div>
      <div className="right-tool">
        <p className="bank__title">ПАО “МТС-Банк”</p>
            <Link className="main_menu" to="/main-page/dashboard">
                 <i className="icon-main_menu"></i>
            </Link>
      </div>
    </nav>
    <main className="main">
      <table className="table">
        <thead className="table__head">
          <tr className="head-row">
            <td className="empty-cell"></td>
            <td className="head-cell">A</td>
            <td className="head-cell">B</td>
            <td className="head-cell">C</td>
            <td className="head-cell">D</td>
            <td className="head-cell">E</td>
            <td className="head-cell">F</td>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr className="row">
            <td className="title-cell">1</td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"></td>
          </tr>
          <tr className="row">
            <td className="title-cell">2</td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"></td>
          </tr>
          <tr className="row">
            <td className="title-cell">3</td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"></td>
          </tr>
          <tr className="row">
            <td className="title-cell">4</td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"></td>
          </tr>
          <tr className="row">
            <td className="title-cell">5</td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"> </td>
            <td className="cell"></td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
    )
}

export default EditBank;