import React, {useState} from 'react';
import ItemFAQ from "./ItemFAQ";
import style from './FAQContainer.module.scss'

const FaqContainer = () => {

    const [active, setActive] = useState('')

    return (
        <div className={style.container}>
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'What is a professional traffic permit?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'How to check the traffic condition?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />

        </div>
    );
};

export default FaqContainer;
