import React from 'react';
import {useForm} from "react-hook-form";
import c from './sections.module.css';

const AddUserForm = (props) => {
    let {register,handleSubmit,reset} = useForm();

    const onSubmit = (body)=>{
        console.log(body);
        props.addUser(body);
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={c.field_box}>
                    <input {...register('name')} placeholder='name'/>
                </div>
                <div className={c.field_box}>
                    <input {...register('mail')} placeholder='e-mail'/>
                </div>
                <div className={c.field_box}>
                    <input {...register('password')} placeholder='password'/>
                </div>
                <div className={c.field_box}>
                    <select {...register('role')} >
                        <option value="huskarl" selected>приемщик</option>
                        <option value="lenderman">менеджер</option>
                        <option value="konung">админ</option>
                    </select>
                </div>
                <div><button type='submit'>Добавить</button></div>
            </form>
        </div>
    );
};

export default AddUserForm;