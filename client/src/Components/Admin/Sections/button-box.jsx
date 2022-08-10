import React from 'react';
import GranitDisplay from "./granit-display";
import BetonDisplay from "./beton-display";
import MagazinDisplay from "./magazin-display";
import MaterialSection from "./material-section";
import UserSection from "./user-section";
import c from './../admin.module.css';

const ButtonBox = (props) => {
    const granit = <GranitDisplay close={props.close}/>;
    const beton = <BetonDisplay close={props.close}/>;
    const magaz = <MagazinDisplay close={props.close}/>;
    const material = <MaterialSection
        state={props.state}
        addRowMat={props.addRowMat}
        changeField={props.changeField}
        saveMat={props.saveMat}
        selectEl={props.selectEl}
        close={props.close}
    />
    const user = <UserSection  addUser={props.addUser} close={props.close}/>

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