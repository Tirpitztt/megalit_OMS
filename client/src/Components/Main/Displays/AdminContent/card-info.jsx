import React from 'react';
import c from './admincontent.module.css';

const CardInfo = (props) => {
    let title = props.title;
    let info = [];
    for(let field in props.state){
        info.push(<div className={c.line_card}><p>{field} <span>{props.state[field]}</span></p></div>)
    }
    return (
        <div className={c.card_wrap}>
            <p className={c.title_card}>{title}</p>
            {info}
        </div>
    );
};

export default CardInfo;