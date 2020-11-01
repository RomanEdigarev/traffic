import React from 'react';
import style from './SectorTitle.module.scss'

const SectorTitle = ({title}) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>{title}</h2>
        </div>
    );
};

export default SectorTitle;
