import c from './sections.module.css'
import {useState} from "react";
import ConfirmModal from "../../../Common/confirmModal";

const CustomerEditSection = (props)=>{

    let obj = {
        type:'customer',
        customer:{
            id:props.props.id,
            last_name:props.props.last_name,
            name:props.props.name,
            father_name: props.props.father_name,
            address:props.props.address,
            phone:props.props.phone,
            rank:props.props.rank
        }

    }
    let [isActive,setActive] = useState(false);
    const onChangeField = (e)=>{
        if(e.target.name in obj.customer){
            obj.customer[e.target.name]=e.target.value;
            props.changeSt(obj);
        }
    }
    const updateClick = ()=>{
        setActive(true);
    }
    const confirm = (isOK)=>{
        if(isOK){
            props.saveChange(obj);
            setActive(false);
        }
        setActive(false);
    }


    return(
        <div className={!props.active?c.section_wrapper:c.active}>
            <ConfirmModal active={isActive} conf={confirm} />
            <div className={c.content_box}>
                <div><p>ID: <span>{props.props.id}</span></p></div>
                <div className={c.group_fields}>
                    <div className={c.field_box}>
                        <label>Фамилия:</label>
                        <input type='text' name='last_name'
                               onChange={onChangeField}
                               value={obj.customer.last_name} />
                    </div>
                    <div className={c.field_box}>
                        <label>Имя:</label>
                        <input type='text' name='name'
                               onChange={onChangeField}
                               value={obj.customer.name}/>
                    </div>
                    <div className={c.field_box}>
                        <label>Отчество:</label>
                        <input type='text' name='father_name'
                               onChange={onChangeField}
                               value={obj.customer.father_name} />
                    </div>
                    <div className={c.field_box}>
                        <label>Адрес:</label>
                        <input type='text' name='address'
                               onChange={onChangeField}
                               value={obj.customer.address}/>
                    </div>
                    <div className={c.field_box}>
                        <label>Телефон:</label>
                        <input type='text' name='phone'
                               onChange={onChangeField}
                               value={obj.customer.phone}/>
                    </div>
                    <div className={c.field_box}>
                        <label>Ранг:</label>
                        <input type='text' name='rank'
                               onChange={onChangeField}
                               value={obj.customer.rank}/>
                    </div>
                </div>


                <div className={c.button_wrap}>
                    <div className={c.button+' '+c.but_hide}
                         onClick={()=>props.show('customer')}
                    ><p>Скрыть</p></div>
                    <div className={c.button+' '+c.but_save}
                         onClick={updateClick}
                    ><p>Сохранить</p></div>
                </div>
            </div>

        </div>
    )

}

export default CustomerEditSection;