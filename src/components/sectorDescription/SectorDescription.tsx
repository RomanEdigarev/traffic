import React from 'react';
import style from './SectorDescription.module.scss'

const SectorDescription = ({text}) => {
    return (
        <div className={style.container}>
            <p className={style.text}>
                {text}
            </p>
        </div>
    );
};

export default SectorDescription;
