import React from 'react';
import style from './MainTitle.module.scss'

const MainTitle = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>
                Your awesome traffic permit consultant.
            </h1>
        </div>
    );
};

export default MainTitle;
