import React from 'react';

import './pages.css';

const PageTwo = () => {
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
              <div className="block__title">Сведения о работе</div>
              <div className="block__row">
                <select className="block__select block__select_medium" name="">
                  <option value="">Вид занятости</option>
                  <option value="">Полный рабочий день</option>
                  <option value="">Неполный рабочий день</option>
                  <option value="">Сокращенный рабочий день</option>
                  <option value="">Самозанятость </option>
                  <option value="">Сезонная</option>
                </select>
                <input className="block__input block__input_medium" type="text" placeholder="Организация"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Юридический адрес организации"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Должность"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="text" placeholder="Размер з/п"/>
                <input className="block__input block__input_medium" type="date" placeholder="Дата принятия"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="tel" placeholder="Рабочий телефон"/>
              </div>
            </div>
            <div className="form__block block"> 
              <div className="block__title">
                <label className="checkbox-lable" for="additional-finance">Дополнительные доходы </label>
                <input type="checkbox" id="additional-finance"/>
              </div>
              <div className="block__row">
                <select className="block__select block__select_medium" name="">
                  <option value="">Вид дохода</option>
                  <input className="block__input block__input_medium" type="text" placeholder="Сумма дохода"/>
                </select>
              </div>
              <div className="block__row"><a className="add-data" href="#"><i className="icon-plus"></i></a></div>
            </div>
          </div>
          <div className="form__column">
            <div className="form__block block"> 
              <div className="block__title">
                <label className="checkbox-lable" for="part-time_work">Работа по совместительству</label>
                <input type="checkbox" id="part-time_work"/>
              </div>
              <div className="block__row">
                <select className="block__select block__select_medium" name="">
                  <option value="">Вид занятости</option>
                  <option value="">Полный рабочий день</option>
                  <option value="">Неполный рабочий день</option>
                  <option value="">Сокращенный рабочий день</option>
                  <option value="">Самозанятость </option>
                  <option value="">Сезонная</option>
                </select>
                <input className="block__input block__input_medium" type="text" placeholder="Организация"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Юридический адрес организации"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Должность"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="text" placeholder="Размер з/п"/>
                <input className="block__input block__input_medium" type="date" placeholder="Дата принятия"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="tel" placeholder="Рабочий телефон"/>
              </div>
            </div>
          </div>
          <div className="form__column">
            <div className="form__block block"> 
              <div className="block__title">Сведения о расходах</div>
              <div className="block__row">
                <select className="block__select block__select_medium" name="">
                  <option value="">Вид расходов</option>
                </select>
              </div>
              <div className="block__row">
                <input className="block__input block__input_medium" type="text" placeholder="Сумма в рублях"/>
              </div>
              <div className="block__row"><a className="add-data" href="#"><i className="icon-plus"></i></a></div>
            </div>
            <div className="form__block block"> 
              <div className="block__title">Сведения об образовании</div>
              <div className="block__row">
                <select className="block__select block__select_medium" name="">
                  <option value="">Образование</option>
                  <option value="">Докторская степень</option>
                  <option value="">Магистратура</option>
                  <option value="">Высшее</option>
                  <option value="">Неоконченое высшее</option>
                  <option value="">Среднее</option>
                </select>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Специальность"/>
              </div>
            </div>
            <div className="form__block block"> 
              <div className="block__title">Семейное положение</div>
              <div className="block__row">
                <select className="block__select block__select_medium" name="">
                  <option value="">Выбрать</option>
                  <option value="">Женат(а)</option>
                  <option value="">Холост</option>
                  <option value="">Вдовец/вдова</option>
                </select>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Количество детей (до 18-ти лет)"/>
              </div>
            </div>
          </div>
          <div className="form__btns"><a className="form__btn" href="#">Назад</a><a className="form__btn" href="#">Далее</a></div>
        </form>
      </div>
    </main>
    )
}

export default PageTwo;
