import React from 'react';

import './pages.css';

const PageThree = () => {
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
              <div className="block__title">Цель кридита</div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Цель кридита"/>
              </div>
            </div>
          </div>
          <div className="form__column">
            <div className="form__block block"> 
              <div className="block__title">Кредитная история</div>
              <div className="block__row flex-left">
                <input type="checkbox" id="credit-history"/>
                <label className="checkbox-lable" for="credit-history">Кредитная история в наличии</label>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Комментарий к кредитной истории"/>
              </div>
              <div className="block__row">
                <input className="block__input block__input_big" type="text" placeholder="Нагрузка"/>
              </div>
            </div>
          </div>
          <div className="form__column">
            <div className="form__block block"> 
              <div className="block__title">Дополнительные сведения</div>
              <div className="block__row flex-left">
                <input type="checkbox" id="criminal-records"/>
                <label className="checkbox-lable" for="criminal-records">Наличие судимостей или решений суда</label>
              </div>
              <div className="block__row">
                <textarea className="block__input" name="" cols="30" rows="3" placeholder="Комментарий если чек-бокс НЕ снят"></textarea>
              </div>
            </div>
          </div>
          <div className="form__btns"><a className="form__btn" href="#">Назад</a><a className="form__btn" href="#">Далее</a></div>
        </form>
      </div>
    </main>
    )
}

export default PageThree;