import React, {useContext, useEffect, useState} from 'react';
import c from './create-order.module.css'
import ComplectSec from "./OrderSections/ComplectSec/complectSec";
import FinalSec from "./OrderSections/FinalSec/finalSec";
import HandlingsSec from "./OrderSections/HandlingsSec/handlingsSec";
import MontazSec from "./OrderSections/MontazSec/montazSec";
import {materialContext} from "../../Context/material.Context";
import {AuthContext} from "../../Context/auth.context";


const CreateOrder = (props) => {
    let materials = props.state.materials||0;
    let usd = 0;
    if(materials!=0){
        usd = materials.mats[0].USD;
    }
    let {userId,userName} = useContext(AuthContext);
    let employer = {
        id:userId,
        name:userName
    }
    useEffect(()=>{
        props.setEmployer(employer);
    },[])
    let [active,setActive] = useState(0);
    const changeCrux = ()=>{
        props.setTotal(props.state.newOrder);
    }
    const changeDisplay = (val)=>{
        setActive(val);
    }
    const saveOrder = ()=>{
        props.orderCreate(props.state);
    }
    let statePage = [
        <ComplectSec state={props.state.newOrder.complects}
                     setDetail={props.setDetail}
                     correctApply={props.correctApply}
                     delDetal={props.delDetal}
                     setComplect={props.setComplect}
                     delCompl={props.delCompl}
                     changeDisplay={changeDisplay}
                     changeCrux={changeCrux}/>,
        <HandlingsSec state={props.state.newOrder.handlings}
                      setHand={props.setHand}
                      delHand={props.delHand}
                      setText={props.setText}
                      setSketchPath={props.setSketchPath}
                      changeHydro={props.changeHydro}
                      changeCrux={changeCrux}
                      changeDisplay={changeDisplay}/>,
        <MontazSec state={props.state.newOrder.montaz}
                   setMontaz={props.setMontaz}
                   setDelivery={props.setDelivery}
                   setDeliveryPoint={props.setDeliveryPoint}
                   setSizeMontaz={props.setSizeMontaz}
                   delMontaz={props.delMontaz}
                   changeCrux={changeCrux}
                   changeDisplay={changeDisplay}/>,
        <FinalSec state={props.state}
                  setFindCust={props.setFindCust}
                  setTermin={props.setTermin}
                  setPayment={props.setPayment}
                  setDiscount={props.setDiscount}
                  makerChange={props.makerChange}
                  changeCrux={changeCrux}
                  saveOrder={saveOrder}
                  clearState={props.clearState}
                  changeDisplay={changeDisplay}/>];

    return (
        <materialContext.Provider value={materials}>
        <div className={c.content_wrapper}>
            <div className={c.header_create}>
                <div className={c.header_title}><p>Создание нового заказа</p></div>
                <div><button className={c.offer_but}>Оформить</button></div>
                <div className={c.header_title}><p>Стоимость: USD <span> {(props.state.newOrder.calculation.new_total_cost).toFixed(2)} </span>
                BLR <span> {(props.state.newOrder.calculation.new_total_cost*usd).toFixed(2)}</span></p></div>
            </div>
            <div className={props.state.status_OK?c.error_hidden:c.error_block}>Ошибка сохранения</div>
            {statePage[active]}
        </div>
        </materialContext.Provider>
    );
};

export default CreateOrder;