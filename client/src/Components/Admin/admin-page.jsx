import React from 'react';
import MaterialSection from "./Sections/material-section";
import c from './admin.module.css';
import UserSection from "./Sections/user-section";

const AdminPage = (props) => {
    return (
        <div>
            <div className={c.admin_box}>

            </div>
            <div className={c.content}>
                <div className={c.left}>
                    <MaterialSection state={props.state}
                                     addRowMat={props.addRowMat}
                                     changeField={props.changeField}
                                     saveMat={props.saveMat}
                                     selectEl={props.selectEl}/>
                </div>
                <div className={c.right}>
                    <UserSection addUser={props.addUser} />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;