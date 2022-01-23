import React from 'react';
import c from './workPage.module.css';

const UpperSec = ({calculation,termin,customer,rate,sketchPath}) => {
    let avans = 0;
    if(calculation.payments.length){
        calculation.payments.forEach(item=>{
            avans += item.summa;
        })
    }
    let img = '';
    if(sketchPath){
        img = <img src={sketchPath} alt=""/>
    }
    return (
        <div className={c.upper_wrap}>
            <div className={c.upper_box}>
                <div>{img}</div>
            </div>
            <div className={c.upper_box}>
                <div className={c.customer_box}>
                    <div className={c.cust_row}>
                        <p className={c.lbl}>Заказчик:</p>
                        <p>{customer.full_name}</p>
                    </div>
                    <div className={c.cust_row}>
                        <p className={c.lbl}>Адрес:</p>
                        <p>{customer.address}</p>
                    </div>
                    <div className={c.cust_row}>
                        <p className={c.lbl}>Телефон:</p>
                        <p>{customer.phone}</p>
                    </div>
                    <div className={c.cust_row}>
                        <p className={c.lbl}>Сроки:</p>
                        <p>{termin.date_finish}</p>
                    </div>
                </div>
                <div className={c.calc_box}>
                    <div className={c.row_calc}>
                        <p className={c.lbl}>Стоимость:</p>
                        <p className={c.coinmin}>{((calculation.total_cost)*rate).toFixed(2)} <span>бел.руб</span></p>
                        <p>{(calculation.total_cost).toFixed(2)} </p>
                    </div>
                    <div className={c.row_calc}>
                        <p className={c.lbl}>Аванс:</p>
                        <p>{(avans*rate).toFixed(2)} <span>бел.руб</span></p>
                        <p>{avans.toFixed(2)} </p>
                    </div>
                    <div className={c.row_calc}>
                        <p className={c.lbl}>Остаток:</p>
                        <p>{((calculation.balance)*rate).toFixed(2)} <span>бел.руб</span></p>
                        <p>{(calculation.balance).toFixed(2)} </p>
                    </div>
                </div>
                <div className={c.prim_box}>
                    <div className={c.row_prim}>Примечание</div>
                    <div className={c.row_prim}></div>
                    <div className={c.row_prim}></div>
                    <div className={c.row_prim}></div>
                </div>
            </div>
        </div>
    );
};

export default UpperSec;