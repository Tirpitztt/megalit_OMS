import React from 'react';

import c from './../admin.module.css';
import MaterialContainer from "./materialContainer";
import GranitContainer from "./granitContainer";
import BetonContainer from "./betonContainer";
import MagazinContainer from "./magazinContainer";
import UserContainer from "./userContainer";

const ButtonBox = (props) => {
    const granit = <GranitContainer />;
    const beton = <BetonContainer />;
    const magaz = <MagazinContainer />;
    const material = <MaterialContainer />
    const user = <UserContainer  />

    return (
        <div className={c.admin_butt_wrap}>
            <button className={c.buttons_tool} onClick={()=>props.dc(material)}>Материал</button>
            <button className={c.buttons_tool} onClick={()=>props.dc(granit)}>Гранит</button>
            <button className={c.buttons_tool} onClick={()=>props.dc(beton)}>Бетон</button>
            <button className={c.buttons_tool} onClick={()=>props.dc(magaz)}>Магазин</button>
            <button className={c.buttons_tool} onClick={()=>props.dc(user)}>Пользователи</button>
        </div>
    );
};

export default ButtonBox;