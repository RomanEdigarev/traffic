import React from 'react';
import style from './ButtonHeader.module.scss'

const ButtonHeader = () => {
    return (
            <div className={style.buttonContainer}>
                <p className={style.buttonText}>Contact US</p>
            </div>
    );
};

export default ButtonHeader;
