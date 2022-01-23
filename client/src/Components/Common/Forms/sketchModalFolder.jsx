import React from 'react';
import c from "../modal.module.css";

const SketchModalFolder = ({state,select}) => {
     //state.splice(0,1);
     let display = <div></div>;
     display = state.map((item,i)=>{
         let name = item.Key.toString();
        if((item.Key).includes('beton')){
            name='Бетон';
        }else if((item.Key).includes('granit')){
            name='Гранит';
        }else if((item.Key).includes('ogr')){
            name='Ограда';
        }
        let folder = <div className={c.folder_row} onClick={()=>select(item.Key)}>
            <div>{name}</div>
            <div>{item.Key}</div>
        </div>
        if(i===0){
            folder = <div></div>
        }
        return <div key={i}>{folder}</div>
    })
    return (
        <div>
            {display}
        </div>
    );
};

export default SketchModalFolder;