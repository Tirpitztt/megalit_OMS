import React from 'react';
import AddUserForm from "./add-user-form";
import c from './../admin.module.css';

const UserSection = (props) => {
    return (
        <div className={c.user_box}>
            <div className={c.section_but_box}>

                    <p>Добавление нового пользователя</p>

                <div className={c.button_close_wrap}>
                    <button className={c.button_close} onClick={()=>props.delDisp('Connect(UserContainer)')}>X</button>
                </div>
            </div>
            <div className={c.table_box}>
                <AddUserForm addUser={props.addUser}/>
            </div>
        </div>
    );
};

export default UserSection;