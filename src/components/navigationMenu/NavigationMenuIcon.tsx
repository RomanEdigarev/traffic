import React from 'react';
import style from './NavigationMenuIcon.module.scss'
import IconComponent from "../img/IconComponent";
import {Link} from "react-router-dom";

const NavigationMenuIcon = () => {
    return (
        <Link to={'home'} className={style.headerIcon}>
            <IconComponent/>
            <p>trafico</p>
        </Link>
    );
};

export default NavigationMenuIcon;
