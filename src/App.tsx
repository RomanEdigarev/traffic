import React from 'react';
import style from './App.module.scss'
import FirstSector from "./sectors/firstSector/FirstSector";
import ButtonHeader from "./components/buttons/ButtonHeader/ButtonHeader";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import ButtonGetStarted from "./components/buttons/ButtonGetStarted/ButtonGetStarted";
import TopBackground from "./components/topBackground/TopBackground";
import SecondSector from "./sectors/secondSector/SecondSector";

function App() {
  return (
      <Router>
          <div className={style.container}>
              {/*<FirstSector/>*/}
              <SecondSector/>
          </div>
      </Router>
  );
}

export default App;
