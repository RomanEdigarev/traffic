import React from 'react';
import style from './FirstSector.module.scss'
import NavigationMenu from "../../components/navigationMenu/NavigationMenu";
import MainTitle from "../../components/mainTitle/MainTitle";
import ButtonGetStarted from "../../components/buttons/ButtonGetStarted/ButtonGetStarted";
import TopBackground from "../../components/topBackground/TopBackground";

const FirstSector = () => {
    return (
        <div className={style.firstContainer}>
            <NavigationMenu/>
            <MainTitle/>
            <ButtonGetStarted/>
            <TopBackground/>

        </div>
    );
};

export default FirstSector;
