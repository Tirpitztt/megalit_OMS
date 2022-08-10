import React from 'react';
import AddUserForm from "./add-user-form";
import c from './../admin.module.css';

const UserSection = (props) => {
    return (
        <div className={c.user_box}>
            <div className={c.section_but_box}>
                <div></div>
                <div>
                    <button className={c.button_close} onClick={()=>props.close('UserSection')}>X</button>
                </div>
            </div>
            <AddUserForm addUser={props.addUser}/>
        </div>
    );
};

export default UserSection;