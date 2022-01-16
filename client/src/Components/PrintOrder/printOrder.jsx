import React, {useEffect, useState} from 'react';
import c from './printOrder.module.css';
import {useOrder} from "../../Hooks/order.hook";
import {useParams} from "react-router-dom";
import Specification from "./Specification/specification";
import Protocol from "./Protocol/protocol";
import Contract from "./Contract/contract";
import WorkPage from "./WorkPage/workPage";
import {useMaterials} from "../../Hooks/material.hook";

const PrintOrder = () => {
    let [rate,setRate] = useState(0);
    let [materials] = useMaterials();
    useEffect(()=>{
        if(Object.entries(materials).length){
            setRate(materials.mats[0].USD);
        }
    },[materials])
    let number = useParams();
    let {order,customer} = useOrder(number.orderNum);
    let specification = 'loading...';
    let protocol = 'loading...';
    let contract = 'loading...';
    let workPage = 'loading...';
    if(order){
        specification = <Specification order={order} customer={customer} />;
        protocol = <Protocol order={order} customer={customer} rate={rate}/>;
        contract = <Contract order={order} customer={customer} rate={rate}/>;
        workPage = <WorkPage order={order} customer={customer} rate={rate}/>;
    }
    const changeRate = (e)=>{
        setRate(materials.mats[0][e.target.value]);
    }
    const printClick = ()=>{
        window.print();
    }
    return (
        <div>
            <div className={c.printbut_box}>
                <button onClick={printClick}>Печать</button>
                <select onChange={changeRate} className={c.select_rate}>
                    <option value="USD" selected>BLR</option>
                    <option value="BLR">USD</option>
                </select>
            </div>
            <div className='print'>
                {specification}
                {protocol}
                {contract}
                {workPage}
            </div>
        </div>
    );
};

export default PrintOrder;