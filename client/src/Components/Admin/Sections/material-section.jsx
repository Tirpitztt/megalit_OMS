import React from 'react';
import MaterialTable from "./material-table";
import c from './../admin.module.css';

const MaterialSection = (props) => {
    let matRow = 'no data';
    const point = (id,val,name)=>{
        let p = <td onDoubleClick={()=>doubleClick(id)}>{val}</td>
        if(props.state.selectElement===id){
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
        console.log('id:',id);
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
                <div className={c.button_section_wrap}>
                    <button className={c.buttons_tool} onClick={props.addRowMat}>add row</button>
                    <button className={c.buttons_tool}>button</button>
                    <button className={c.buttons_tool}>button</button>
                    <button className={c.buttons_tool}>button</button>
                    <button className={c.buttons_tool}>button</button>
                </div>
                <div className={c.button_close_wrap}>
                    <button className={c.button_close} onClick={()=>props.delDisp('Connect(MaterialContainer)')}>X</button>
                </div>
            </div>
            <div className={c.table_box}>
                <MaterialTable row={matRow} />
            </div>

        </div>
    );
};

export default MaterialSection;