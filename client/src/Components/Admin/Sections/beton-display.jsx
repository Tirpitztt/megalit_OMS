import React from 'react';
import c from './../admin.module.css';

const BetonDisplay = ({close}) => {
    return (
        <div className={c.beton_box}>
            <div className={c.section_but_box}>
                <div></div>
                <div>
                    <button className={c.button_close} onClick={()=>close('BetonDisplay')}>X</button>
                </div>
            </div>
            beton
        </div>
    );
};

export default BetonDisplay;