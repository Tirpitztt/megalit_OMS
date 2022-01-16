import React from 'react';
import c from './specification.module.css'
import MontazTable from "./montazTable";

const Montaz = (props) => {
    let montaz = 'нет монтажных работ';
    if(props.state){
        montaz = <div>
            <div className={c.montaz_info_sec}>
                <p>Доставка, км: {props.state.delivery}</p>
                <p>Доставка, место: {props.state.delivery_point}</p>
            </div>
            <p>Размер участка: {props.state.weight} x {props.state.width} x {props.state.height}</p>
            <MontazTable state={props.state} />
        </div>
    }

    return (
        <div>
            {montaz}
        </div>
    );
};

export default Montaz;