import React from 'react';
import c from './contract.module.css';

const Requisites = ({maker,customer}) => {

    let performer = {
        name:'ИП Тихонович И.В.',
        address:'РБ,Могилевская обл.,г.Бобруйск ул.Парковая,6',
        UNP:'791076359',
        acc:'BY30 BLBB 301 307 910 763 590 010 01',
        phones:['(225)41-25-65','(44)56-000-85','(44)576-111-6']
    }
    if(maker==='megalit'){
        performer.name = 'УЧТПП МегалитГран';
        performer.address = 'РБ,Могилевская обл.,г.Бобруйск ул.Парковая,57/3';
        performer.UNP = '790450614';
        performer.acc = 'BY52 BLBB 301 207 904 506 1400 1001';
    }

    return (
        <div className={c.req_box}>
            <div className={c.maker_box}>
                <p className={c.title}>Подрядчик</p>
                <p><span>Наименование:</span> {performer.name}</p>
                <p><span>Адрес:</span> {performer.address}</p>
                <p><span>УНП:</span> {performer.UNP}</p>
                <p><span>р/с:</span> {performer.acc}</p>
                <p><span>тел:</span>{performer.phones[0]}</p>
                <p>{performer.phones[1]}</p>
                <p>{performer.phones[2]}</p>
            </div>
            <div className={c.customer_box}>
                <p className={c.title}>Заказчик</p>
                <p><span>ФИО:</span> {customer.last_name} {customer.name} {customer.father_name}</p>
                <p><span>Адрес:</span> {customer.address}</p>
                <p><span>Телефон:</span> {customer.phone}</p>
            </div>
        </div>
    );
};

export default Requisites;