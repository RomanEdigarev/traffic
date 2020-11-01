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
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'What are the requirements for a professional traffic permit?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'When is a professional traffic permit needed?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'Where to look for a traffic permit?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'Are there differences between a traffic permit and a professional traffic permit?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'How much does a commercial traffic permit cost for goods?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'How to plug in for the traffic permit test?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />
            <ItemFAQ
                active={active}
                setActive={setActive}
                question={'How is the sample for a professional traffic permit booked?'}
                answer={'Traffic permits are a requirement for conducting professional traffic.'}
            />

            <div className={style.moreBtn}>
                <span>load more</span>
            </div>

        </div>
    );
};

export default FaqContainer;
