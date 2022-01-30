import React, {useState} from 'react';
import c from '../sections.module.css'
import CustomerForm from "./customer-form";
import FinalForm from "./final-form";
import {NavLink} from "react-router-dom";

const FinalSec = (props) => {
    let [disabl,setDisabl] = useState(true);
    const makerVar = (maker)=>{
        props.makerChange(maker);
    }
    const [isPrint, setPrint] = useState(false);
    const customerBuild = (fields)=>{
        let customer = {
            last_name:fields[0].last_name,
            name:fields[1].name,
            father_name:fields[2].father_name,
            address:fields[3].address,
            phone:fields[4].phone,
            rank:fields[5].rank
        }
        props.setFindCust(customer);
    }
    const saveClick = ()=>{
        props.saveOrder();
        if(props.state.status_OK){
            setPrint(true);
        }
    }

    return (
        <div  className='final_wrapper'>
            <div className={c.section_content}>
                <div className='form_box'>
                    <div className={c.form_title}>
                        ДАННЫЕ ЗАКАЗЧИКА
                    </div>
                    <CustomerForm state={props.state}
                                  bild={customerBuild}
                                  setDis={setDisabl}
                                  setFindCust={props.setFindCust}/>
                </div>
                <div className={c.table_box}>
                    <FinalForm state={props.state}
                               setPayment={props.setPayment}
                               changeCrux={props.changeCrux}
                               setDiscount={props.setDiscount}
                               setMaker={makerVar}
                               setTermin={props.setTermin}/>
                </div>
            </div>
            <div className={isPrint?c.print_box:c.hidden}>
                <p>Save success. Print document?</p>
                <div className={c.print_button_box}>
                    <div><NavLink to='/db'><p>Завершить</p></NavLink></div>
                    <div><NavLink to={'/print/'+props.state.number}><p>Распечатать</p></NavLink></div>
                </div>
            </div>
            <div className={c.button_box}>
                <button onClick={()=>props.changeDisplay(2)}>назад </button>
                <button onClick={saveClick} disabled={disabl}>Сохранить</button>
            </div>
        </div>
    );
};

export default FinalSec;