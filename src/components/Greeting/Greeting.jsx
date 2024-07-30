import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import cn from 'classnames';

export const Greeting = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/authorization');
  };

  return (
    <div className={s.greeting__container}>
      <div className={s.greeting__content}>
        <div className={s.greeting__title}>Ночлежка</div>
        <div className={s.greeting__description}>Игра для сотрудников</div>
        <button onClick={handleButtonClick}>Войти</button>
      </div>
    </div>
  );
};
