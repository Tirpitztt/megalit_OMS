import React from 'react';
import c from './../admin.module.css';

const BetonDisplay = (props) => {
    return (
        <div className={c.beton_box}>
            <div className={c.section_but_box}>
                <div></div>
                <div>
                    <button className={c.button_close} onClick={()=>props.delDisp('Connect(BetonContainer)')}>X</button>
                </div>
            </div>
            <div className={c.table_box}>
                beton
            </div>
        </div>
    );
};

export default BetonDisplay;