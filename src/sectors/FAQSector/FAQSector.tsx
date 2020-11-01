import React from 'react';
import style from './FAQSector.module.scss'
import FaqContainer from "../../components/faqs/FAQContainer";
import illustration from './Illustration.svg'

const FaqSector = () => {
    return (
        <div className={style.container}>

            <div className={style.content}>
                <h1 className={style.title}>FAQ</h1>
                <h2 className={style.subtitle}>Questions and Answers on Professional Traffic Permits:</h2>
            </div>

            <FaqContainer/>

            <div className={style.background}></div>
            <div className={style.illustration}>
                <img src={illustration} alt=""/>
            </div>

        </div>
    );
};

export default FaqSector;
