import React from 'react';
import style from "./TopBackground.module.scss";
import city from './img/City.svg'
import circle from './img/Circles.svg'
import ground from './img/Ground.svg'
import rightPlants from './img/PlantsRight.svg'
import plantsInAuto from  './img/PlantsInAuto.svg'
import man from './img/Man.svg'
import woman from './img/Woman.svg'
import auto from './img/Auto.png'

const TopBackground = () => {
    return (
        <div className={style.container}>
            <div className={style.background}></div>
            <img className={style.city} src={city} alt=""/>
            <img className={style.circle} src={circle} alt=""/>
            <img className={style.rightPlants} src={rightPlants} alt=""/>
            <img className={style.ground} src={ground} alt=""/>
            <img className={style.plantsInAuto} src={plantsInAuto} alt=""/>
            <img className={style.woman} src={woman} alt=""/>
            <img className={style.man} src={man} alt=""/>
            <img className={style.auto} src={auto} alt=""/>
        </div>
    );
};

export default TopBackground;
