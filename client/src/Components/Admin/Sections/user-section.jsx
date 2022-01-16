import React from 'react';
import AddUserForm from "./add-user-form";
import c from './sections.module.css';

const UserSection = (props) => {
    return (
        <div className={c.user_box}>
           <AddUserForm addUser={props.addUser}/>
        </div>
    );
};

export default UserSection;