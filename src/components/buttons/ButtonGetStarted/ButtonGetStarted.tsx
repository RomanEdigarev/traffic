import React from 'react';
import style from './ButtonGetStarted.module.scss'
import {Link} from "react-router-dom";
import ArrowIcon from "../../img/ArrowIcon/ArrowIcon";

const ButtonGetStarted = () => {
    return (
        <Link to={'get-started'}>
            <div className={style.container}>
                <span className={style.text}>get started</span>
                <ArrowIcon/>
            </div>
        </Link>


    );
};

export default ButtonGetStarted;
