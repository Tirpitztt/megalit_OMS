import React, {useEffect, useState} from 'react';
import c from './../sections.module.css'
import {useMaterial} from "../../../../Hooks/material.hook";
import {useForm} from "react-hook-form";
import {setPrice} from "../../../../Utils/support";
import {buildFloat} from "../../../../Utils/buildNum";

const DetailForm = (props) => {
    let [flag,setFlag] = useState(true);
    let [detailId, setDetailId] = useState(0);
    let [cost,setCost] = useState(0);
    let {material} = useMaterial();
    let {register,handleSubmit,watch,reset} = useForm();
    let dataPrice = watch('dataPrice');
    let [isErr,setErr] = useState(false);

    let options = 'no data';
    if(material){
        options = material.map((item,i)=>{
            return <option key={i} value={item.name}>{item.name}</option>;
        })
    }

    useEffect(()=>{
        setPrice(dataPrice,material,setCost);
    },[JSON.stringify(dataPrice)]);

    const priceChange = (e)=>{
        if(flag){
            setCost(e.target.value);
        }
    }
    const amountChange = (e)=>{
        if(e.target.value.includes(',')){
            setErr(true);
        }else{
            setErr(false);
        }
    }
    const onSubmit = (body)=>{
        body.ind = props.number;
        body.id = detailId;
        body.price = buildFloat(cost);
        body.sort = 'B';
        body.local='sklad';
        body.status = 'no';
        body.height = dataPrice[1].height||0;
        body.width = dataPrice[2].width||0;
        body.weight = dataPrice[3].weight;
        body.material = dataPrice[0].material;
        body.amount = buildFloat(body.amount);
        props.setDetail(body);
        props.changeCrux();
        reset();
    }

    return (
        <form className={c.form_main} onSubmit={handleSubmit(onSubmit)}>
            <p className={c.form_title_into}>Добавить деталь</p>
            <div className={c.form_body}>
                <div className={c.form_section}>
                    <label>наименование</label>
                    <select {...register('name')}>
                        {props.nameList}
                    </select>
                </div>
                <div className={c.form_section}>
                    <label>артикул</label>
                    <input {...register('article')} />
                </div>
                <div className={c.form_section}>
                    <label>материал</label>
                    <select {...register('dataPrice.0.material')}>
                        <option selected>выбери название</option>
                        {options}
                    </select>
                </div>
            </div>
            <fieldset className={c.form_section}>
                <legend>габариты,см</legend>
                <label>толщ</label>
                <select {...register('dataPrice.3.weight')}>
                    <option value="t_2">2</option>
                    <option value="t_3">3</option>
                    <option value="t_5">5</option>
                    <option value="t_8">8</option>
                    <option value="t_10">10</option>
                    <option value="t_12">12</option>
                    <option value="t_15">15</option>
                    <option value="t_20">20</option>
                    <option value="t_25">25</option>
                    <option value="t_30">30</option>
                </select>
                <label>выс</label>
                <input {...register('dataPrice.1.height')} />
                <label>шир</label>
                <input {...register('dataPrice.2.width')} />
            </fieldset>
            <div className={c.form_body}>
                <div className={c.form_section}>
                    <label>цена</label>
                    <input {...register('price',{onChange:priceChange})} value={cost} />
                </div>
                <div className={c.form_section}>
                    <label>количество</label>
                    <input {...register('amount',{onChange:amountChange})} defaultValue='1'/>
                </div>
                <div className={isErr?c.activeErr:c.hide}><p>Запятую НЕЛЬЗЯ!</p></div>
            </div>
            <div className={c.form_body}>
                <button className={c.add_button}
                        disabled={props.dis}
                        onClick={()=>setDetailId(detailId+1)}
                        type='submit'>добавить</button>
            </div>
        </form>
    );
};

export default DetailForm;