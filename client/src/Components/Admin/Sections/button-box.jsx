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
            <button onClick={()=>props.dc(material)}>Материал</button>
            <button onClick={()=>props.dc(granit)}>Гранит</button>
            <button onClick={()=>props.dc(beton)}>Бетон</button>
            <button onClick={()=>props.dc(magaz)}>Магазин</button>
            <button onClick={()=>props.dc(user)}>Пользователи</button>
        </div>
    );
};

export default ButtonBox;