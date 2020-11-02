import React, {FC, useState} from 'react';
import style from './Slider.module.scss'
import Slide from "./slide/Slide";

const Slider: FC = () => {

    const [translateX, setTranslateX] = useState<number>(0)
    const slides = [1, 2, 3]

    const next = () => {
        if (translateX != -440 * (slides.length - 1) || translateX === 0) {
            setTranslateX(translateX - 440)
        }
    }

    const prev = () => {
        if (translateX != 0) {
            setTranslateX(translateX + 440)
        }
    }


    return (
        <div className={style.container}>

            <div className={style.sliderWrapper}>
                <div className={style.sliderContainer} style={{transform: `translateX(${translateX}px)`}}>
                    <Slide/>
                    <Slide/>
                    <Slide/>
                </div>
            </div>

            <div className={style.buttonContainer}>
                <button className={style.buttonLeft} onClick={prev}>prev</button>
                <button className={style.buttonRight} onClick={next}>next</button>
            </div>

        </div>
    );
};

export default Slider;
