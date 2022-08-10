import React, {useState} from 'react';
import c from './protocol.module.css';
import {handlingRow, monumentRow, monumentRowWithHandl, ogradaRow} from "./UtilsCost/monument-row";
const ProtocolTable = (props) => {
    let rows = [];
    let row = '';
    let count = 1;
    //let [handel,setHandel] = useState(true);
    let handel = true;
    if(props.state){
        if(props.state.complects.length){
            props.state.complects.forEach((item)=>{
                if(item.type==='памятник'){
                    if(handel){
                        row=monumentRowWithHandl(item,count,props.rate,props.state.handling);
                        //setHandel(false);
                        handel = false;
                    }else {
                        row=monumentRow(item,count,props.rate);
                    }
                    debugger;
                    rows.push(row);
                    count++;

                }
                if(item.type==='ограда'){
                    row = ogradaRow(item,count,props.rate);
                    rows.push(row);
                    count++;
                }
                if(item.type==='магазин'){
                    item.complect_items.forEach((detal)=>{
                        row = <tr><td>{count}</td><td>{detal.name}</td>
                             <td>шт</td><td>B</td><td>{(detal.price*props.rate).toFixed(2)}</td><td>{detal.amount}</td>
                            <td>{((detal.price*detal.amount)*props.rate).toFixed(2)}</td></tr>
                        rows.push(row);
                        count++;
                    })
                }

            })
        }
        if(props.state.handling.handling_items.length && handel){
            row = handlingRow(props.state.handling,count,props.rate)
            rows.push(row);
            count++;
        }
        if(props.state.montaz.montaz_items.length){
            let cost = 0;
            if(props.state.montaz.delivery){
                cost += (props.state.montaz.delivery*1.2)*props.rate;
                row = <tr><td>{count}</td><td>Доставка: {props.state.montaz.delivery_point}</td>
                    <td>км</td><td>o</td><td>{(1.2*props.rate).toFixed(2)}</td><td>{props.state.montaz.delivery}</td>
                    <td>{cost.toFixed(2)}</td></tr>
                rows.push(row);
                count++;
            }
            props.state.montaz.montaz_items.forEach((item)=>{
                let score = 'шт';
                if(item.category==='пол'){score='м.кв.'}else if(item.category==='памятник'){score='компл'};
                row = <tr><td>{count}</td><td>{item.category}-{item.name}-{item.type}</td>
                    <td>{score}</td><td>o</td><td>{((item.price)*props.rate).toFixed(2)}</td><td>{item.amount}</td>
                    <td>{((item.price*item.amount)*props.rate).toFixed(2)}</td></tr>
                rows.push(row);
                count++;
            })
        }

    }
    let discountRow = <tr></tr>;
    if(props.state.calculation.discount){
        discountRow = <tr><td></td><td></td><td></td>
            <td></td><td></td><td>Скидка</td>
            <td className={c.cost_bold}>{((props.state.calculation.discount)*props.rate).toFixed(2)}</td></tr>
        rows.push(discountRow);
    }
    return (
        <table className={c.protocol_table}>
            <thead>
            <tr><th></th><th>Наименование</th>
            <th>ед изм</th><th>категория</th><th>цена</th>
            <th>кол-во</th><th>стоимость</th></tr>
            </thead>
            <tbody>
            {rows}
            <tr><td></td><td></td><td></td>
                <td></td><td></td><td>Итого</td>
                <td className={c.cost_bold}>{((props.state.calculation.total_cost)*props.rate).toFixed(2)}</td></tr>
            </tbody>
        </table>
    );
};

export default ProtocolTable;