import React, {FC, useState} from 'react';
import style from './ItemFAQ.module.scss'
import ShowIcon from "./ShowIcon";
import HiddenIcon from "./HiddenIcon";


type PropsType = {
    question: string,
    answer: string,
    active: string,
    setActive: (string) => void
}
const ItemFAQ : FC<PropsType> = ({question, answer, active, setActive}) => {

    const toggle = () => {
        if(active === question) {
            setActive('')
        }
        else  {
            setActive(question)
        }
    }

    return (
        <div className={style.accordion}>
            <div className={style.contentBox}>
                <div className={style.label} onClick={toggle}>
                    {question}
                    {active === question ? <HiddenIcon/> : <ShowIcon/>}
                </div>
                <div className={`${style.content} ${active === question ? style.active : ''}`}>
                    <p>
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemFAQ;
