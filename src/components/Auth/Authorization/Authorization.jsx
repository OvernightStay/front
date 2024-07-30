import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../core/store/authSlice';
import s from './styles.module.scss';

export const Authorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { status, token } = useSelector(state => state.auth);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (!formData.login || !formData.password) {
      setError('Введены неверные данные');
    } else {
      setError('');
      dispatch(loginUser(formData)).then(action => {
        if (action.type === 'auth/login/fulfilled') {
          alert('Вход выполнен');
        } else {
          setError('Введены неверные данные');
        }
      });
    }
  };

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  return (
    <div className={s.autorization__container}>
      <div className={s.autorization__content}>
        <div className={s.autorization__logo}>Ночлежка</div>
        <input
          className={s.autorization__login}
          name="login"
          placeholder="Логин"
          onChange={handleChange}
        />
        <input
          className={s.autorization__password}
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
        />
        <div className={s.autorization__btns}>
          <button onClick={handleRegisterClick}>Регистрация</button>
          <button>Забыли пароль</button>
        </div>
        <button onClick={handleLogin}>Начать игру</button>
        {error && <div className={s.error}>{error}</div>}
      </div>
    </div>
  );
};
