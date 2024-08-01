import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import CustomInput from '../../ui/CustomInput/CustomInput';

export const Authorization = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const [error, setError] = useState('');

  // const { status, token } = useSelector(state => state.auth); // Удален useSelector

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
      // Имитация успешного входа
      setTimeout(() => {
        alert('Вход выполнен (моковые данные)');
        navigate('/main'); // Перенаправление на главную страницу после входа
      }, 1000);
      // dispatch(loginUser(formData)).then(action => {
      //   if (action.type === 'auth/login/fulfilled') {
      //     alert('Вход выполнен');
      //   } else {
      //     setError('Введены неверные данные');
      //   }
      // });
    }
  };

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  return (
    <div className={s.authorization__container}>
      <div className={s.authorization__content}>
        <div className={s.authorization__logo}>Ночлежка</div>
        <CustomInput
          className={s.authorization__input}
          name="login"
          placeholder="Логин"
          onChange={handleChange}
        />
        <CustomInput
          className={s.authorization__input}
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
        />
        <div className={s.authorization__btns}>
          <button
            className={s.authorization__btn}
            onClick={handleRegisterClick}
          >
            Регистрация
          </button>
          <button className={s.authorization__btn}>Забыли пароль</button>
        </div>
        <button className={s.authorization__btn} onClick={handleLogin}>
          Начать игру
        </button>
        {error && <div className={s.error}>{error}</div>}
      </div>
    </div>
  );
};
