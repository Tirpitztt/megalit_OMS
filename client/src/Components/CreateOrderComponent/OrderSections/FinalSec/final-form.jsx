import React, {useContext, useState} from 'react';
import c from './../sections.module.css';
import {setToday} from "../../../../Utils/dateTermin";
import {materialContext} from "../../../../Context/material.Context";
import {AuthContext} from "../../../../Context/auth.context";

const FinalForm = (props) => {
    let material = React.useContext(materialContext);
    let {userId,userName} = useContext(AuthContext);
    let [pay,setPay] = useState(0);
    let [isCash,setCash] = useState(false);
    let [discount,setDiscount] = useState(0);
    console.log('context:',material);
    const changeMaker = (e)=>{
        props.setMaker(e.target.value);
    }

    const changeCash = ()=>{
        if(isCash){
            setCash(false);
        }else{
            setCash(true);
        }
    }
    const changePay = (e)=>{
        setPay(e.target.value);

    }
    const setDisc = ()=>{
        props.setDiscount(discount);
        props.changeCrux();
    }
    const setPayment = ()=>{
        let data = {
            cash:isCash,
            pay_date:setToday(),
            payment:changeBel(pay),
            paymentBlr:pay,
            employer:{
                id:userId,
                name:userName
            }
        }
        props.setPayment(data);
        console.log(data.payment)

    }
    const changeBel = (pay)=>{
        return (pay/material.mats[0].USD).toFixed(2);
    }
    const onChangeTermin = (e)=>{
        props.setTermin(e.target.value);
    }
    return (
        <div>
            <div className={c.kassa_sec}>
                <div className={c.kassa_item}>
                    <label>Исполнитель:</label>
                    <select onChange={changeMaker}>
                        <option value="tihonovich">ИП Тихонович</option>
                        <option value="megalit" selected>Мегалит Гран</option>
                    </select>
                </div>
                <div className={c.kassa_item}>
                    <label>Сроки:</label>
                    <input type="date" value={props.state.orderOption.termin}
                           onChange={onChangeTermin} />
                </div>
            </div>

            <div className={c.kassa_sec}>
                <div className={c.kassa_item}>
                    <label>наличные</label>
                    <input type="checkbox"  checked={isCash} onChange={changeCash}/>
                </div>
                <div className={c.kassa_item}>
                    <label>Аванс,бел.руб:</label>
                    <input type="text" onChange={changePay} onBlur={setPayment}/>
                </div>
                <div className={c.kassa_item} >
                    <label>Скидка:</label>
                    <input onChange={(e)=>setDiscount(e.target.value)}
                           onBlur={setDisc} />
                </div>
            </div>
        </div>
    );
};

export default FinalForm;