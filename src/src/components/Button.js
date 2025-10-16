import React, { useState } from 'react';
import './Button.css';

const Button = ({ onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked); // Исправлено: было 1isClicked
        onClick(); // Передаем управление внешнему обработчику
    };

    return (
        <button
            className={`custom-button ${isClicked ? 'clicked' : ''}`} // Исправлено: шаблонная строка
            onClick={handleClick}
        >
            Изменить цвет
        </button>
    );
}

export default Button;