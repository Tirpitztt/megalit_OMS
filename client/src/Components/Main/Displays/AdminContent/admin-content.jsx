import React from 'react';
import c from './admincontent.module.css';
import CardInfo from "./card-info";

const AdminContent = (props) => {
    let cards = [];
    for(let field in props.state.adminInfo){
        cards.push(<CardInfo state={props.state.adminInfo[field]} title={field}/>)
    }
    return (
        <div className={c.content_wrap}>
            {cards}
        </div>
    );
};

export default AdminContent;