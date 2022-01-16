import React from 'react';
import c from './workPage.module.css';


const DownSec = (props) => {
    let betonCompl = [];
    let complect = props.order.complects.map((compl,i)=>{
        let detal = compl.complect_items.map((detail,i)=>{
            if(detail.material.slice(1)==='Бетон'){
                let betonDet = <div className={c.complect_row}>
                    <p>{detail.name}</p>
                    <p>{detail.material}{detail.height}x{detail.width}x{detail.weight}</p>
                    <p>{detail.amount}шт</p>
                </div>
                betonCompl.push(betonDet);
            }
            return <div className={c.complect_row}>
                <p>{detail.name}</p>
                <p>{detail.material}{detail.height}x{detail.width}x{detail.weight}</p>
                <p>{detail.amount}шт</p>
            </div>
        })
        return <div className={c.complect}><p>комплект:{compl.type}</p>{detal}</div>
    })


    return (
        <div className={c.down_wrap}>
            <div className={c.details_box}>
                <div className={c.middle_title}>Детализация</div>
                <div className={c.content_box}>
                    <div className={c.content_item}>{complect}</div>
                    <div className={c.content_item}></div>
                </div>
            </div>
            <div className={c.beton_box}>
                <div className={c.middle_title}><p>Заливка</p></div>
                <div>
                    <p>Заказ № <span>{props.order.number}</span> </p>
                </div>
                {betonCompl}
            </div>
        </div>
    );
};

export default DownSec;