import React from 'react';
import style from './ThirdSector.module.scss'
import SectorTitle from "../../components/sectorTitle/SectorTitle";
import SectorDescription from "../../components/sectorDescription/SectorDescription";
import illustration from './illustrations.svg'

const ThirdSector = () => {
    return (
        <div className={style.container}>
            <img className={style.illustration} src={illustration} alt=""/>
            <div>
                <SectorTitle title={'hot to apply'}/>
                <SectorDescription text={'When applying for a traffic permit, there are certain requirements that you must meet that are included in ' +
                'the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. ' +
                'Important to remember is to confirm your application for a traffic permit by the company\'s company signer or CEO.'}/>
            </div>

        </div>
    );
};

export default ThirdSector;
