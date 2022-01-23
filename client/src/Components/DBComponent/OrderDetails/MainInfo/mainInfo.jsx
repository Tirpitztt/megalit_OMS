import c from './maininfo.module.css'
import Modal from './../../../Common/modal'
import {useState} from "react";
import PayModal from "../../../Common/payModal";
const MainInfo = (props)=>{
    let order = props.props.order.order;
    let maker = 'ИП Тихонович';
    if(order.maker==='megalit'){
        maker = 'УЧТПП Мегалит Гран';
    }
    let [modalActive, setModalActive] = useState(false);
    const showPayments = ()=>{
        props.active(true);
    }
    let img = '';
    if(order.handling.sketch_path){
        img = <img src={order.handling.sketch_path} alt=""/>
    }
    return(
        <div className={c.main_section}>
            <div className={c.wrapper}>
                <p className={c.label_left}>Номер заказа:</p>
                <p className={c.value_right}>{props.props.number}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Исполнитель:</p>
                <p className={c.value_right}>{maker}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Оформил:</p>
                <p className={c.value_right}>{order.employerName}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Заказчик:</p>
                <p className={c.value_right}>{props.props.name}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Телефон:</p>
                <p className={c.value_right}>{props.props.phone}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Дата оформления:</p>
                <p className={c.value_right}>{order.termin.date_start}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Срок изготовления:</p>
                <p className={c.value_right}>{order.termin.date_finish}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Сумма:</p>
                <p className={c.value_right+' '+c.green}>{order.calculation.total_cost}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Скидка:</p>
                <p className={c.value_right+' '+c.green}>{order.calculation.discount}</p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Остаток:</p>
                <p className={c.value_right+' '+c.red}>{order.calculation.balance}
                    <span className={c.paybut} onClick={showPayments}>Показать платежи</span>
                    <span className={c.paybut} onClick={()=>setModalActive(true)}>Внести платеж</span></p>
            </div>
            <div className={c.wrapper}>
                <p className={c.label_left}>Статус:</p>
                <p className={c.value_right}>{order.status}
                <span className={c.paybut}>Изменить статус</span></p>
            </div>

            <div className={c.text_wrap}>
                <p className={c.title_text}>Надписи для гравировки</p>
                <div className={c.epitaf}>{order.handling!==null?order.handling.text_grav:'no text'}</div>
            </div>
            <div className={c.text_wrap}>
                <p className={c.title_text}>Эскиз формы</p>
                <div className={c.epitaf}>{img}</div>
            </div>

            <Modal modal={props.modal}
                   payment={order.calculation.payments}
                   active={props.active}/>
            <PayModal modal={modalActive}
                      setModal={setModalActive}
                      setPayment={props.setPayment}
                      number={props.props.number}/>
        </div>
    )
}

export default MainInfo;