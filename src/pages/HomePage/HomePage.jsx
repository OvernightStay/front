import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authorization } from '../../components/Auth/Authorization';
import s from './styles.module.scss';

export const HomePage = () => {
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showAuthorization, setShowAuthorization] = useState(false);
  const slides = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev % slides.length) + 1);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleButtonClick = () => {
    setShowAuthorization(true);
    navigate('/authorization');
  };

  return (
    <div className={s.home__container}>
      {showAuthorization ? (
        <Authorization />
      ) : (
        <>
          <div className={s.home__slider}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={s.home__slide}
                style={{ opacity: currentSlide === slide ? 1 : 0 }}
              >
                {slide}
              </div>
            ))}
          </div>
          <div className={s.home__progressBar}>
            <div
              className={s.home__progress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {progress === 100 && (
            <button className={s.home__button} onClick={handleButtonClick}>
              Войти
            </button>
          )}
        </>
      )}
    </div>
  );
};
