import React from 'react';
import c from './../admin.module.css';

const GranitDisplay = ({close}) => {
    return (
        <div className={c.granit_box}>
            <div className={c.section_but_box}>
                <div></div>
                <div>
                    <button className={c.button_close} onClick={()=>close('GranitDisplay')}>X</button>
                </div>

            </div>
            granit
        </div>
    );
};

export default GranitDisplay;