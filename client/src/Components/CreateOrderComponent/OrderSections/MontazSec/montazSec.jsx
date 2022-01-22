import React from 'react';
import c from '../sections.module.css'
import MontazForm from "./montaz-form";
import {useForm} from "react-hook-form";
import MontazTable from "./montaz-table";
import {buildFloat} from "../../../../Utils/buildNum";

const MontazSec = (props) => {

    let {register,watch} = useForm();
    let length = watch('length')||0;
    let width = watch('width')||0;
    let height = watch('height')||0;
    let size = width+'x'+length+'x'+height;
    const changeSizeMontaz = ()=>{
        props.setSizeMontaz(size);
    }
    const deliveryChange=(e)=>{
        props.setDelivery(buildFloat(e.target.value));
        props.changeCrux();
    }
    const deliveryPointChange=(e)=>{
        props.setDeliveryPoint(e.target.value);
    }

    return (
        <div className='montaz_wrapper'>
            <div className={c.section_content}>
                <div className='form_box montaz_pic'>
                    <div className={c.form_title}>
                        МОНТАЖНЫЕ РАБОТЫ
                    </div>
                    <div className={c.details_form}>
                        <MontazForm setMontaz={props.setMontaz}
                                    changeCrux={props.changeCrux}/>
                    </div>
                </div>
                <div className={c.table_box}>
                    <p>размер участка</p>
                    <div className={c.size_section}>
                        <div>
                            <label>ширина</label>
                            <input {...register('width',{onChange:changeSizeMontaz})} defaultValue='0' />
                        </div>
                        <div>
                            <label>длина</label>
                            <input {...register('length',{onChange:changeSizeMontaz})} defaultValue='0'/>
                        </div>
                        <div>
                            <label>высота</label>
                            <input {...register('height',{onChange:changeSizeMontaz})} defaultValue='0'/>
                        </div>
                        <div>
                            <label>Доставка,km: </label>
                            <input onChange={deliveryChange}
                                   value={props.state.delivery}/>
                        </div>
                        <div>
                            <label>Нас. пункт: </label>
                            <input  onChange={deliveryPointChange}
                                    value={props.state.deliveryPoint}/>
                        </div>
                    </div>
                    <div className={c.montaz_table_sec}>
                        <div>Размер участка,m: {size}</div>
                        <MontazTable state={props.state.details}
                                     changeCrux={props.changeCrux}
                                     delMontaz={props.delMontaz}/>
                    </div>
                </div>
            </div>
            <div className={c.button_box}>
                <button onClick={()=>props.changeDisplay(1)}>назад </button>
                <button onClick={()=>props.changeDisplay(3)}>далее > </button>
            </div>
        </div>
    );
};

export default MontazSec;