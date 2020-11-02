import React from 'react';
import style from './App.module.scss'
import FirstSector from "./sectors/firstSector/FirstSector";
import {BrowserRouter as Router} from "react-router-dom";
import SecondSector from "./sectors/secondSector/SecondSector";
import ThirdSector from "./sectors/thirdSector/ThirdSector";
import ItemFAQ from "./components/faqs/ItemFAQ";
import FaqContainer from "./components/faqs/FAQContainer";
import FaqSector from "./sectors/FAQSector/FAQSector";
import Slider from "./components/slider/Slider";

function App() {
    return (
        <Router>
            <div className={style.container}>
                {/*/!*<div style={{height: "1237.55px"}}>*!/*/}
                {/*/!*    <FirstSector/>*!/*/}
                {/*/!*</div>*!/*/}
                {/*/!*<SecondSector/>*!/*/}
                {/*/!*<ThirdSector/>*!/*/}
                {/*/!*<FaqContainer/>*!/*/}
                {/*<FaqSector/>*/}
                <Slider/>
            </div>
        </Router>
    );
}

export default App;
