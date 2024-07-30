import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import cn from 'classnames';

export const Authorization = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  return (
    <div className={s.autorization__container}>
      <div className={s.autorization__content}>
        <div className={s.autorization__logo}>Ночлежка</div>
        <input className={s.autorization__login} placeholder="Логин" />
        <input
          className={s.autorization__password}
          type="password"
          placeholder="Пароль"
        />
        <div className={s.autorization__btns}>
          <button onClick={handleRegisterClick}>Регистрация</button>
          <button>Забыли пароль</button>
        </div>
        <button>Начать игру</button>
      </div>
    </div>
  );
};
