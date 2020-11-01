import React from 'react';
import style from './SecondSector.module.scss'
import SectorTitle from "../../components/sectorTitle/SectorTitle";
import SectorDescription from "../../components/sectorDescription/SectorDescription";
import SectorQuestion from "../../components/sectorDescription/SectorQuestion";
import illustration from './Illustration.svg'

const SecondSector = () => {
    return (
        <div className={style.container}>
            <SectorTitle title={'about us'}/>
            <SectorDescription text={' The occupational traffic permit is one of the most important\n' +
            '                things in the company when carrying out freight transport.\n' +
            '                In fact, it is a prerequisite for doing business traffic at all.'}/>
            <SectorQuestion/>
            <img className={style.illustration} src={illustration} alt=""/>
        </div>
    );
};

export default SecondSector;
