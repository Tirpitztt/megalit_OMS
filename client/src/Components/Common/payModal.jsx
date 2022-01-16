import React, {useContext, useState} from 'react';
import c from "./modal.module.css";
import {setToday} from "../../Utils/dateTermin";
import {materialContext} from "../../Context/material.Context";
import {exchangeBlr} from './../../Utils/support';
import {AuthContext} from "../../Context/auth.context";

const PayModal = (props) => {
    let {userId,userName} = useContext(AuthContext);
    let materials = useContext(materialContext);
    let usd = 0;
    if(materials!=0){
        usd = materials.mats[0].USD
    }
    let isActive = props.modal;
    let [payment, setPayment] = useState(0);

    const savePayment = ()=>{
        let sum = 0;
        try{
            sum = exchangeBlr(payment,usd)
        }catch (e) {
           console.log(e.message);
        }
        let body = {
            number:props.number,
            summa:sum,
            summaBlr:payment,
            date:setToday(),
            employer:userId,
            employerName:userName,
            cash:true
        }

        props.setPayment(body);
        props.setModal(false);
    }


    return (
        <div className={isActive?c.active:c.modalwr}>
            <div className={c.content}>
                <div className={c.close} onClick={()=>props.setModal(false)}>X</div>
                <div><p>Внести платеж,бел руб:</p></div>
                <input value={payment}
                       onChange={(e)=>setPayment(e.target.value)}/>

                <button onClick={savePayment}>сохранить</button>
            </div>

        </div>
    );
};

export default PayModal;