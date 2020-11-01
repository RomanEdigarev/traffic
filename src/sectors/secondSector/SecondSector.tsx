import React from 'react';
import style from './SecondSector.module.scss'
import SectorTitle from "../../components/sectorTitle/SectorTitle";
import SectorDescription from "../../components/sectorDescription/SectorDescription";

const SecondSector = () => {
    return (
        <div className={style.container}>
            <SectorTitle/>
            <SectorDescription/>
        </div>
    );
};

export default SecondSector;
