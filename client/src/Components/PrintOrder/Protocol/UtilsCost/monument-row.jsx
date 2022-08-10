import React from "react";

export const monumentRow = (complect,count,rate)=>{
    let cost = complect.summComplect * rate;

    let row = <tr><td>{count}</td><td>Изготовление деталей памятника</td>
         <td>компл</td><td>B</td><td>{cost.toFixed(2)}</td><td>1</td><td>{cost.toFixed(2)}</td></tr>;
    return row;
}
export const monumentRowWithHandl = (complect,count,rate,handl)=>{
    let cost = complect.summComplect * rate;
    if(handl.hydrophob){
        cost += (20*rate);
    }
    handl.handling_items.forEach((item)=>{
        cost += (item.price*item.amount)*rate;
    })
    let row = <tr><td>{count}</td><td>Изготовление деталей памятника1</td>
        <td>компл</td><td>B</td><td>{cost.toFixed(2)}</td><td>1</td><td>{cost.toFixed(2)}</td></tr>;
    return row;
}
export const ogradaRow = (complect,count,rate)=>{
    let cost = complect.summComplect * rate;

    let row = <tr><td>{count}</td><td>Изготовление деталей ограждения</td>
        <td>компл</td><td>B</td><td>{cost.toFixed(2)}</td><td>1</td><td>{cost.toFixed(2)}</td></tr>;
    return row;
}
export const handlingRow = (handling,count,rate)=>{
    let cost = 0;
    if(handling.hydrophob){
        cost = (20*rate);
    }
    handling.handling_items.forEach((item)=>{
        cost += (item.price*item.amount)*rate;
    })
    let row = <tr><td>{count}</td><td>Обработка (фаски,граверка и пр.)</td>
        <td>компл</td><td>o</td><td>{cost.toFixed(2)}</td><td>{1}</td>
        <td>{cost.toFixed(2)}</td></tr>
    return row;
}