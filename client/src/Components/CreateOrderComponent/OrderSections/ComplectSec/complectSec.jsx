import React, {useState} from 'react';
import c from '../sections.module.css'
import DetailForm from "./detail-form";
import {useForm} from "react-hook-form";
import DetailsTable from "./details-table";
import DeleteButton from "../../../UI/Buttons/delete-button";
import {setNameDetailList} from "../../../../Utils/support";

const ComplectSec = (props) => {
    let {register,handleSubmit} = useForm();
    let [complectActive,setComplectActive] = useState(1);
    let [nameList,setNameList] = useState([]);
    let disabled = true;
    let complects = 'нет комплектов...';

    const complectClick = (num,type)=>{
        setComplectActive(num);
        setNameDetailList(type,setNameList);
    }

    const delCompl = (data)=>{
        props.delCompl(data);
        props.changeCrux();
    }

    if(props.state.length){
        disabled = false;
        complects = props.state.map((item,i)=>{
            return <div key={i}>
                <div className={c.compl_title}>
                    <p onClick={()=>complectClick(item.number,item.type)}
                       className={complectActive===item.number?c.active_compl:''}
                    >Комплект: <i>{item.type}</i></p>
                    <div className={c.del_but}>
                        <DeleteButton del={delCompl} number={item.number}/>
                    </div>
                </div>
                <DetailsTable   props={item.details}
                                delDetal={props.delDetal}
                                changeCrux={props.changeCrux}
                />
            </div>
        })
    }
    const onSubmit = (body)=>{
        body.number = Math.ceil(Math.random()*1000);
        body.details = [];
        props.setComplect(body);
    }
    return (
        <div className='complect_wrapper'>
            <div className={c.section_content}>
                <div className='form_box compl_pic'>
                    <div className={c.form_title}>
                        КОМПЛЕКТАЦИЯ
                    </div>
                    <div className={c.compl_form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className={c.form_section}>
                                <legend>добавить комплект</legend>
                                <label>тип комплекта</label>
                                <select {...register('type')}>
                                    <option value="памятник">памятник</option>
                                    <option value="ограда">ограждение</option>
                                    <option value="магазин">магазин</option>
                                </select>
                                <button className={c.add_button} type='submit'>добавить</button>
                            </fieldset>
                        </form>
                    </div>
                    <div className={c.details_form}>
                        <DetailForm number={complectActive}
                                    nameList={nameList}
                                    dis={disabled}
                                    setDetail={props.setDetail}
                                    changeCrux={props.changeCrux}/>
                    </div>
                </div>
                <div className={c.table_box}>
                    {complects}
                </div>
            </div>
            <div className={c.button_box}>
                <button onClick={()=>props.changeDisplay(1)}>далее > </button>
            </div>
        </div>
    );
};

export default ComplectSec;