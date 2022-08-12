import React, {useState} from 'react';
import c from './admin.module.css';
import ButtonBox from "./Sections/button-box";

const AdminPage = (props) => {
    let displays = props.state.displays.map(item => {
        return <div className={c.item_content}>{item}</div>
    })
    return (
        <div>
            <div className={c.admin_box}>
                <ButtonBox dc={props.addDisp} />
            </div>
            <div className={c.content}>
                {displays}
            </div>
        </div>
    );
};

export default AdminPage;