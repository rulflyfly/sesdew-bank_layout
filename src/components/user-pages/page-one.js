import React from 'react';

import './pages.css';

const PageOne = () => {
    return (
        <main className="wrapper">
      <header className="header">
        <h1 className="header__title">Анкета клиента</h1>
        <hr className="delimiter"/>
      </header>
      <div className="form-container">
        <form className="form" action="#" method="post">
          <div className="form__column">
            <div className="form__block block">
              <div className="block__title">Основная информация</div>
              <div className="block__row">
                <input className="block__input block__input_big block__input_decoration block__input_green_circle" type="text" placeholder="Фамилия"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big block__input_decoration block__input_red_circle" type="text" placeholder="Имя"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big block__input_decoration block__input_orange_circle" type="text" placeholder="Отчество"/>
              </div>
              <div className="block__row">
                <select className="block__select block__select_medium select-decor" name="">
                  <option value="">Пол</option>
                  <option value="">Муж</option>
                  <option value="">Жен</option>
                </select>
              </div>
            </div>
            <div className="form__block block"> 
              <div className="block__title">Паспорт РФ</div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="text" placeholder="Серия"/>
                <input className="block__input block__input_medium" type="text" placeholder="Номер"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Кем выдан"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="date" placeholder="Дата выдачи"/>
                <input className="block__input block__input_medium" type="text" placeholder="Код подразделения"/>
              </div>
            </div>
            <div className="form__block block"> 
              <div className="block__title">Дополнительные документы</div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="text" placeholder="СНИЛС"/>
                <input className="block__input block__input_medium" type="text" placeholder="ИНН"/>
              </div>
            </div>
          </div>
          <div className="form__column">
            <div className="form__block block"> 
              <div className="block__title">Контактная информация</div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="tel" placeholder="Домашний телефон"/>
                <input className="block__input block__input_medium" type="tel" placeholder="Мобильный телефон"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="email" placeholder="Электронная почта"/>
              </div>
            </div>
            <div className="form__block block"> 
              <div className="block__title">Адрес регистрации</div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Область"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Район"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Населенный пункт"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Улица"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_small" type="text" placeholder="Дом"/>
                <input className="block__input block__input_small" type="text" placeholder="Корпус"/>
                <input className="block__input block__input_small" type="text" placeholder="Квартира"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="text" placeholder="Индекс"/>
              </div>
            </div>
          </div>
          <div className="form__column">
            <div className="form__block block"> 
              <div className="block__title">Адрес фактического проживания</div>
              <div className="block__row flex-left">
                <input type="checkbox" id="same-address"/>
                <label className="checkbox-lable" htmlFor="same-address">Совпадает с местом регистрации </label>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Область"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Район"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Населенный пункт"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Улица"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_small" type="text" placeholder="Дом"/>
                <input className="block__input block__input_small" type="text" placeholder="Корпус"/>
                <input className="block__input block__input_small" type="text" placeholder="Квартира"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="text" placeholder="Индекс"/>
              </div>
            </div>
          </div>
          <div className="form__btns right-btn"><a className="form__btn" href="#">Далее</a></div>
        </form>
      </div>
    </main>
    )
}

export default PageOne;