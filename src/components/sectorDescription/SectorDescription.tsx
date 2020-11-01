import React from 'react';
import style from './SectorDescription.module.scss'

const SectorDescription = () => {
    return (
        <div className={style.container}>
            <p className={style.text}>
                The occupational traffic permit is one of the most important
                things in the company when carrying out freight transport.
                In fact, it is a prerequisite for doing business traffic at all.
            </p>
        </div>
    );
};

export default SectorDescription;
