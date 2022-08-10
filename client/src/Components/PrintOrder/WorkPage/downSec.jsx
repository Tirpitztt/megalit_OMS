import React from 'react';
import c from './workPage.module.css';


const DownSec = (props) => {
    let betonCompl = [];
    let complect = props.order.complects.map((compl,j)=>{
        let detal = compl.complect_items.map((detail,i)=>{
            let widthTd = <p>{detail.material}{detail.height}x{detail.width}x{detail.weight}</p>
            if(detail.name==='цветник'||detail.name==='подставка'){
                widthTd = <p>{detail.material}{detail.width}x{detail.height}x{detail.weight}</p>
            }
            if(detail.material.slice(1)==='Бетон'){
                let betonDet = <div className={c.complect_row} key={j}>
                    <p>{detail.name}</p>
                    {widthTd}
                    <p>{detail.amount}шт</p>
                </div>
                betonCompl.push(betonDet);
            }

            return <div className={c.complect_row} key={i}>
                <p>{detail.name}</p>
                {widthTd}
                <p>{detail.amount}шт</p>
            </div>
        })
        return <div className={c.complect}><p>комплект:{compl.type}</p>{detal}</div>
    })
    let handlings = props.order.handling.handling_items.map((handl,i)=>{
        return <div key={i} className={c.complect_row}>
                <p>{handl.name}</p>
                <p>{handl.category}</p>
                <p>{handl.size}</p>
                <p>{handl.amount}</p>
            </div>
    })
    let montaz = props.order.montaz.montaz_items.map((mont,i)=>{
        return <div key={i} className={c.complect_row}>
                <p>{mont.name}</p>
                <p>{mont.category}</p>
                <p>{mont.type}</p>
                <p>{mont.amount}</p>
            </div>


    })


    return (
        <div className={c.down_wrap}>
            <div className={c.details_box}>
                <div className={c.content_box}>
                    <div className={c.content_item}>
                        <div className={c.middle_title}>Комплектация</div>
                        {complect}</div>
                    <div className={c.content_item}>
                        <div className={c.middle_title}>Обработка</div>
                        {handlings}</div>
                </div>

                <div className={c.content_box}>
                    <div className={c.content_item}>
                        <div className={c.middle_title}>Монтаж</div>
                        {montaz}</div>
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