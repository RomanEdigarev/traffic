import React, {FC} from 'react';
import style from './Slide.module.scss'

type PropsType = {
    text: string,
    author: string,
    avatar: any,
}

const Slide: FC = () => {
    return (
        <div className={style.container}>

            <div className={style.text}>
                <p>Yes, you will need to have the land owner sign the permit application as the Permittee,
                    and you sign the permit as the Applicant or Agent for the Permittee.</p>
            </div>

            <div className={style.author}>
                <img className={style.avatar} src="" alt=""/>
                <span>Isak Pettersson</span>
            </div>

        </div>
    );
};

export default Slide;
