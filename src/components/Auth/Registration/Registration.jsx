import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../core/store/authSlice';
import s from './styles.module.scss';
import {
  mailRegExp,
  passwordRegExp,
} from '../Authorization/validations/validationAuth';

export const Registration = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(registerUser(data)).then(action => {
      if (action.type === 'auth/register/fulfilled') {
        alert('Вы успешно зарегистрированы');
      } else {
        alert('Ошибка регистрации');
      }
    });
  };

  return (
    <div className={s.registration__container}>
      <div className={s.registration__content}>
        <div className={s.registration__logo}>Регистрация</div>
        <form
          className={s.registration__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={s.registration__name}
            name="first_name"
            placeholder="Имя"
            {...register('first_name', { required: 'Имя обязательно' })}
          />
          <input
            className={s.registration__surname}
            name="last_name"
            placeholder="Фамилия"
            {...register('last_name', { required: 'Фамилия обязательна' })}
          />
          <input
            className={s.registration__phone}
            name="phone"
            placeholder="Телефон"
            {...register('phone', { required: 'Телефон обязателен' })}
          />
          <input
            className={s.registration__mail}
            name="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: mailRegExp,
                message: 'Неверный формат email',
              },
            })}
          />
          <input
            className={s.registration__password}
            name="password"
            type="password"
            placeholder="Пароль"
            {...register('password', {
              required: 'Пароль обязателен',
              pattern: {
                value: passwordRegExp,
                message:
                  'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
              },
            })}
          />
          <button type="submit">Зарегистрироваться</button>
          <div className={s.error__container}>
            {errors.first_name && (
              <p className={s.error__message}>{errors.first_name.message}</p>
            )}
            {errors.last_name && (
              <p className={s.error__message}>{errors.last_name.message}</p>
            )}
            {errors.phone && (
              <p className={s.error__message}>{errors.phone.message}</p>
            )}
            {errors.email && (
              <p className={s.error__message}>{errors.email.message}</p>
            )}
            {errors.password && (
              <p className={s.error__message}>{errors.password.message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
