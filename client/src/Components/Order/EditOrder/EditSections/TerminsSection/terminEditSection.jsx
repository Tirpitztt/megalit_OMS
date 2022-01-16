import c from './terminEdit.module.css'
import {useState} from "react";

const TerminEditSection = (props)=>{
    let [finish,setFinish] = useState(props.props.date_finish);
    let obj = {
        type:'termin',
        termin:{
            id:props.props.id,
            date_start:props.props.date_start,
            date_finish:props.props.date_finish
        }

    }
    const changeTermin = (e)=>{
        obj.termin[e.target.name] = e.target.value;
        props.changeSt(obj);
        props.saveChange(obj);
    }
    return(
        <div className={c.content_box}>
            <div className={c.termin_box}>
                <div className={c.termin}>
                    <label>Дата приемки:</label>
                    <p>{props.props.date_start}</p>
                </div>
                <div className={c.termin}>
                    <label>Дата окончания:</label>
                    <input type="date"
                           value={obj.termin.date_finish}
                           onChange={changeTermin}
                           name='date_finish'/>
                </div>
            </div>
        </div>
    )
}

export default TerminEditSection;