import React from 'react';

import './pages.css';

const PageFour = () => {
    return (
        <main className="wrapper">
            <header className="header">
                <h1 className="header__title">Анкета клиента</h1>
                <hr className="delimiter"/>
            </header>
            <div className="form-container">
            <form className="form" action="#" method="post">
                <div className="block__btns">
                    <a className="block__btn" href="">Выбрать все</a>
                    <a className="block__btn" href="">Отменить выделение</a>
                </div>
                <div className="form__column">
                <div className="form__block block">
                <div className="block__row">
                    <label className="bank-lable">
                    <input type="checkbox" checked></input>ПАО “МТС-Банк”
                    </label>
                </div>
                <div className="block__row">
                    <label className="bank-lable">
                        <input type="checkbox" checked></input>Тинькофф - Банк
                    </label>
                </div>
              <div className="block__row">
                  <label className="bank-lable">
                    <input type="checkbox" checked></input>Райфайзен
                  </label>
              </div>
              <div className="block__row">
                  <label className="bank-lable">
                      <input type="checkbox" ></input>Сбербанк
                  </label>
              </div>
              <div className="block__row">
                  <label className="bank-lable">
                      <input type="checkbox" ></input>МКБ
                  </label>
              </div>
              <div className="block__row">
                  <label className="bank-lable">
                      <input type="checkbox" ></input>ЛокоБанк
                  </label>
              </div>
              <div className="block__row">
                  <label className="bank-lable">
                      <input type="checkbox" ></input>Банк HomeCredit
                  </label>
              </div>
              <div className="block__row">
                  <label className="bank-lable">
                      <input type="checkbox" ></input>Альфа-банк
                  </label>
              </div>
              <div className="block__row">
                  <label className="bank-lable">
                      <input type="checkbox" ></input>Россельхоз банк
                  </label>
              </div>
              <div className="block__row">
                  <label className="bank-lable">
                      <input type="checkbox" ></input>Росбанк
                  </label>
              </div>
                </div>
                </div>
                <div className="form__column">
            <div className="form__block block">
              <div className="block__row"><label className="bank-lable"><input type="checkbox" ></input>ПАО “Сбербанк”</label></div>
              <div className="block__row"><label className="bank-lable"><input type="checkbox" ></input>Газпромбанк</label></div>
              <div className="block__row"><label className="bank-lable"><input type="checkbox" ></input>Банк Открытие</label></div>
            </div>
          </div>
          <div className="form__column">
            <div className="form__block block"></div>
          </div>
          <div className="form__btns"><a className="form__btn" href="#">Назад</a><a className="form__btn-export" href="#">Выгрузить в Excel</a></div>
            </form>
            </div>
        </main>
    )
}

export default PageFour;