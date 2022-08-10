import React, {useState} from 'react';
import MaterialSection from "./Sections/material-section";
import c from './admin.module.css';
import UserSection from "./Sections/user-section";
import ButtonBox from "./Sections/button-box";

const AdminPage = (props) => {
    let displays = props.state.displays.map(item => {
        return <div className={c.item_content}>{item}</div>
    })
    return (
        <div>
            <div className={c.admin_box}>
                <ButtonBox dc={props.addDisp}
                           close={props.delDisp}
                           state={props.state}
                           addRowMat={props.addRowMat}
                           changeField={props.changeField}
                           saveMat={props.saveMat}
                           selectEl={props.selectEl}
                           addUser={props.addUser}
                />
            </div>
            <div className={c.content}>
                {displays}
            </div>
        </div>
    );
};

export default AdminPage;