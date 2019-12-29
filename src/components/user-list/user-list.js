import React from 'react';

import './user-list.css';

const UserList = () => {
    return (
        <main class="wrapper">
      <header class="header">
        <h1 class="header__title">Список пользователей</h1>
        <hr class="delimiter"/>
      </header>
      <div class="table__header">
        <div class="table__user-name">Фамилия и имя</div>
        <div class="table__login">Логин</div>
      </div>
      <div class="table-content">
        <div class="table__row">
          <p class="row__user-title">Главный администратор чье имя не раскрывается</p>
          <p class="row__user-login">Admin_Zoe</p>
          <div class="row__btns"><a class="passgen-btn" href="#">Сгенерировать пароль</a><a class="del-btn" href="#">Удалить</a></div>
        </div>
        <hr class="delimiter"/>
        <div class="table__row">
          <p class="row__user-title">Судничников Андрей Валентинович Lore</p>
          <p class="row__user-login">Design_Zoe Lore</p>
          <div class="row__btns"><a class="passgen-btn" href="#">Сгенерировать пароль</a><a class="del-btn" href="#">Удалить</a></div>
        </div>
        <hr class="delimiter"/>
        <div class="table__row">
          <p class="row__user-title">Судничников Сергей Валентинович</p>
          <p class="row__user-login">Sergey0001</p>
          <div class="row__btns"><a class="passgen-btn" href="#">Сгенерировать пароль</a><a class="del-btn" href="#">Удалить</a></div>
        </div>
        <hr class="delimiter"/>
      </div>
    </main>
    )
}

export default UserList;