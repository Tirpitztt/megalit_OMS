import React from 'react';
import c from '../sections.module.css';
import HandelForm from "./handel-form";
import HandelTable from "./handel-table";


const HandlingsSec = (props) => {
    const changeH = ()=>{
        if(props.state.hydrophob){
            props.changeHydro(false);
        }else{
            props.changeHydro(true);
        }
        props.changeCrux();
    }
    const changeGrav=(e)=>{
        props.setText(e.target.value);
    }
    return (
        <div className='handlings_wrapper'>
            <div className={c.section_content}>
                <div className='form_box handel_pic'>
                    <div className={c.form_title}>
                        ОБРАБОТКА
                    </div>
                    <div className={c.details_form}>
                        <HandelForm setHand={props.setHand}
                                    changeCrux={props.changeCrux}/>
                    </div>
                </div>
                <div className={c.table_box}>
                    <div className={c.check_box}>
                        <label>Гидрофоб: </label>
                        <input type="checkbox"
                               onChange={changeH}
                               checked={props.state.hydrophob}/>
                    </div>
                    <div className={c.text_box}>
                        <label>Текст для нанесения</label>
                        <textarea className={c.text_grav}
                                  onChange={changeGrav}
                                  value={props.state.text_gravi}></textarea>
                    </div>
                    <div>
                        <HandelTable details={props.state.details}
                                     changeTotal={props.changeCrux}
                                     delHandel={props.delHand}/>
                    </div>

                </div>
            </div>
            <div className={c.button_box}>
                <button onClick={()=>props.changeDisplay(0)}>  назад </button>
                <button onClick={()=>props.changeDisplay(2)}>далее > </button>
            </div>
        </div>
    );
};

export default HandlingsSec;