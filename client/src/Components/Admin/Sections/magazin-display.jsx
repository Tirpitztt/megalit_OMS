import React from 'react';
import c from './../admin.module.css';

const MagazinDisplay = ({close}) => {
    return (
        <div className={c.magazin_box}>
            <div className={c.section_but_box}>
                <div></div>
                <div>
                    <button className={c.button_close} onClick={()=>close('MagazinDisplay')}>X</button>
                </div>

            </div>
            magazin

        </div>
    );
};

export default MagazinDisplay;