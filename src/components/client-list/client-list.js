import React from 'react';

import './client-list.css';

const ClientList = () => {
    return (
        <main className="wrapper">
      <header className="header">
        <h1 className="header__title">Список клиентов</h1>
        <hr className="delimiter"/>
      </header>
      <div className="table__header">
        <div className="table__user-name">ФИО Клиента</div>
        <div className="table__date">Дата создания</div>
        <div className="table__appr-banks">Банки на одобрение</div>
      </div>
      <div className="table-content"> 
        <div className="table__row">
          <p className="row__user-title">Ахалмосулишвили Валентина Алексеевна</p>
          <p className="row__user-date-create">19.02.2019</p><a className="row__appr-banks" href="#"><i className="icon-appr-banks"></i></a>
          <div className="row__btns"><a className="export-btn" href="#">Выгрузить в Excel</a></div>
        </div>
        <hr className="delimiter"/>
        <div className="table__row">
          <p className="row__user-title">Судничников Андрей Валентинович</p>
          <p className="row__user-date-create">20.02.2019</p><a className="row__appr-banks" href="#"><i className="icon-appr-banks"></i></a>
          <div className="row__btns"><a className="export-btn" href="#">Выгрузить в Excel</a></div>
        </div>
        <hr className="delimiter"/>
        <div className="table__row">
          <p className="row__user-title">Иванов Иван Иванович</p>
          <p className="row__user-date-create">20.02.2019</p><a className="row__appr-banks" href="#"><i className="icon-appr-banks"></i></a>
          <div className="row__btns"><a className="export-btn" href="#">Выгрузить в Excel</a></div>
        </div>
        <hr className="delimiter"/>
      </div>
    </main>
    )
}

export default ClientList;