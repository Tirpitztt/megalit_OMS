import React from 'react';
import c from "../sections.module.css";
import {useForm} from "react-hook-form";

const HandelForm = (props) => {
    let {register,handleSubmit,reset} = useForm();

    const onSubmit = (body)=>{
        body.id = Math.ceil(Math.random()*1000);
        props.setHand(body);
        props.changeCrux();
        reset();
    }

    return (
        <form className={c.form_main} onSubmit={handleSubmit(onSubmit)}>
            <p className={c.form_title_into}>Добавить обработку</p>
            <div className={c.form_body}>
                <div className={c.form_section}>
                    <label>наименование</label>
                    <input {...register('name')}/>
                </div>
                <div className={c.form_section}>
                    <label>категория</label>
                    <select {...register('category')}>
                        <option value="гравировка" selected>гравировка</option>
                        <option value="триплекс">триплекс</option>
                        <option value="золото">золото</option>
                        <option value="cagiati">cagiati</option>
                        <option value="резка">резка</option>
                        <option value="резка+полир">резка+полир</option>
                        <option value="пескоструй">пескоструй</option>
                    </select>
                </div>
                <div className={c.form_section}>
                    <label>размер</label>
                    <input {...register('size')}/>
                </div>
            </div>
            <div className={c.form_body}>
                <div className={c.form_section}>
                    <label>цена</label>
                    <input {...register('price')}/>
                </div>
                <div className={c.form_section}>
                    <label>количество</label>
                    <input {...register('amount')} defaultValue='1'/>
                </div>
            </div>
            <div className={c.form_body}>
                <button className={c.add_button} type='submit'>добавить</button>
            </div>
        </form>
    );
};

export default HandelForm;