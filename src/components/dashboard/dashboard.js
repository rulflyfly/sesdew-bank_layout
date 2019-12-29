import React from 'react';

import { Link } from 'react-router-dom';

import './dashboard.css';

const Dashboard = () => {
    return (
        <main className="dashboard">
        <div className="cards"> 
            <Link to='nav-banks/bank-list' className="card">
                <h3 className="card__title">Банки</h3>
                <i className="card__icon icon-banks"></i><p className="card__description">Добавить. Удалить. Настроить</p>
            </Link>
            <Link className="card" to='nav-client/client-list'>
                <h3 className="card__title">Анкеты</h3><i className="card__icon icon-profiles"></i>
                <p className="card__description">Добавить. Удалить. Запросить данные. Выгрузить</p>
            </Link>
            <Link className="card" to='user-list'>
                <h3 className="card__title">Настройки</h3><i className="card__icon icon-settings"></i>
                <p className="card__description">Управлять пользователями </p>
            </Link>
        </div>
        </main>
    )
}

export default Dashboard;