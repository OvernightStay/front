import React from 'react';
import s from './styles.module.scss';
import cn from 'classnames';

export const Registration = () => {
  return (
    <div className={s.registration__container}>
      <div className={s.registration__content}>
        <div className={s.registration__logo}>Регистрация</div>
        <input className={s.registration__name} placeholder="Имя" />
        <input className={s.registration__surname} placeholder="Фамилия" />
        <input className={s.registration__phone} placeholder="Телефон" />
        <input className={s.registration__mail} placeholder="Email" />
        <button>Зарегистрироваться</button>
      </div>
    </div>
  );
};


