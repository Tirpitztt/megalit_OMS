import React from 'react';
import c from './../admin.module.css';

const MagazinDisplay = (props) => {
    return (
        <div className={c.magazin_box}>
            <div className={c.section_but_box}>
                <div></div>
                <div>
                    <button className={c.button_close} onClick={()=>props.delDisp('Connect(MagazinContainer)')}>X</button>
                </div>
            </div>
            <div className={c.table_box}>
                magazin
            </div>
        </div>
    );
};

export default MagazinDisplay;