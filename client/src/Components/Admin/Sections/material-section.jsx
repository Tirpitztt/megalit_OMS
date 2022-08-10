import React, {useState} from 'react';
import MaterialTable from "./material-table";
import c from './../admin.module.css';

const MaterialSection = (props) => {
    let matRow = 'no data';
    const point = (id,val,name)=>{
        let p = <td onDoubleClick={()=>doubleClick(id)}>{val}</td>
        if(props.state.selectEl===id){
            p = <td><input onChange={(e)=>changeField(e,id,name)}
                           onBlur={()=>saveData(id,val,name)}
                           value={val}/></td>
        }
        return p;
    }
    const changeField = (e,id,name)=>{
        let body = {
            id:id,
            value:e.target.value,
            field:name
        }
       props.changeField(body);
    }
    const doubleClick = (id)=>{
        props.selectEl(id);
    }
    const saveData = (id,val,name)=>{
        let body = {
            id:id,
            value:val,
            field:name
        }
        props.saveMat(body);
    }
    if(props.state.materials.length){
        matRow = props.state.materials.map((item,i)=>{
            // return <tr><td key={i}>{item.id}</td>
            //     <td><input value={item.name}
            //                onChange={(e)=>changeField(e,item.id,'name')}
            //                 onFocus={}/></td>
            //     <td><input value={item.USD} onChange={(e)=>changeField(e,item.id,'USD')}/></td>
            //     <td><input value={item.EUR} onChange={(e)=>changeField(e,item.id,'EUR')}/></td>
            //     <td><input value={item.RUR} onChange={(e)=>changeField(e,item.id,'RUR')}/></td>
            //     <td><input value={item.BLR} onChange={(e)=>changeField(e,item.id,'BLR')}/></td></tr>
            return <tr><td key={i}>{item.id}</td>
                        {point(item.id,item.name,'name')}
                        {point(item.id,item.USD,'USD')}
                        {point(item.id,item.EUR,'EUR')}
                        {point(item.id,item.RUR,'RUR')}
                        {point(item.id,item.BLR,'BLR')}</tr>
        });
    }
    return (
        <div className={c.material_box}>
            <div className={c.section_but_box}>
                <div></div>
                <div>
                    <button className={c.button_close} onClick={()=>props.close('MaterialSection')}>X</button>
                </div>
            </div>
            <div className={c.table_box}>
                <MaterialTable row={matRow} />
                <button onClick={props.addRowMat}>add row</button>
            </div>

        </div>
    );
};

export default MaterialSection;