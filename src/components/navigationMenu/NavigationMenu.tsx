import React from 'react';
import {Link} from "react-router-dom";
import style from './NavigationMenu.module.scss'
import ButtonHeader from "../buttons/ButtonHeader/ButtonHeader";
import NavigationMenuIcon from "./NavigationMenuIcon";

const NavigationMenu = () => {
    return (
        <div className={style.wrapper}>
            <NavigationMenuIcon/>
            <ul className={style.container}>
                <li><Link to={'about'} className={style.link}>About</Link></li>
                <li><Link to={'howto'} className={style.link}>how to</Link></li>
                <li><Link to={'faqs'} className={style.link}>faqs</Link></li>
                <li><Link to={'contact'} className={style.button}><ButtonHeader/></Link></li>
            </ul>
        </div>
    );
};

export default NavigationMenu;
