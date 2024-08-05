import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';
import logo_small from '../../../assets/images/logo_auth.svg';
import s from './styles.module.scss';

export const Authorization = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const [error, setError] = useState('');

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
      setTimeout(() => {
        alert('Вход выполнен (моковые данные)');
        navigate('/main');
      }, 1000);
    }
  };

  return (
    <div className={s.authorization__container}>
      <div className={s.authorization__content}>
        <img src={logo_small} alt={'logo'} className={s.authorization__logo} />
        <h2 className={s.authorization__title}>Вход</h2>
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
        <div className={s.authorization__options}>
          <label>
            <input style={{ marginRight: '20px' }} type="checkbox" />
            Запомнить учетные данные
          </label>
        </div>
        <div className={s.authorization__links}>
          <Link to="/registration" className={s.authorization__link}>
            Зарегистрироваться
          </Link>
          <Link
            to="#"
            onClick={() => alert('Reset password functionality')}
            className={s.authorization__link}
          >
            Забыл пароль
          </Link>
        </div>
        <CustomButton
          className={s.authorization__btn}
          onClick={handleLogin}
          buttonText="Войти"
        />
        {error && <div className={s.error}>{error}</div>}
      </div>
    </div>
  );
};
