import React from 'react';
import c from './../details.module.css'

const DetailsTable = (props) => {


    const delDet = (cml,det)=>{
        let data = {
            ind:cml,
            id:det
        }
        props.delDetal(data);
        props.changeCrux();
    }
    let detail = <tr><td>нет деталей....</td></tr>
    if(props.props.length){
        detail = props.props.map((item,i)=>{
            return <tr><td>{item.name}</td><td>{item.article}</td><td>{item.material}</td>
                       <td>{item.height}x{item.width}x{item.weight.slice(2)}</td>
                <td>{item.price}</td><td>{item.amount}</td><td>{item.price*item.amount}</td>
                <td><button onClick={()=>delDet(item.ind,item.id)}>delete</button></td></tr>
        })
    }

    return (
        <table className={c.details_table}>
            <thead>
                <tr><th>наименование</th><th>артикул</th><th>материал</th><th>размер</th>
                    <th>цена</th><th>кол-во</th><th>сумма</th><th></th></tr>
            </thead>
            <tbody>
            {detail}
            </tbody>
        </table>
    );
};

export default DetailsTable;