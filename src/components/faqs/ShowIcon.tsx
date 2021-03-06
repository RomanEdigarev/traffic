import React from 'react';
import style from './ShowIcon.module.scss'

const ShowIcon = () => {
    return (
        <svg className={style.icon} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="0.162109" width="2" height="20" fill="#EE4D47"/>
            <rect x="20" y="9.16211" width="2" height="20" transform="rotate(90 20 9.16211)" fill="#EE4D47"/>
        </svg>
    );
};

export default ShowIcon;
