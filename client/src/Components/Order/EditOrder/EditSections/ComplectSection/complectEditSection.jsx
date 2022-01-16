import c from './complectEdit.module.css'
import DetailModal from "../../../../Common/detailModal";
import {useState} from "react";
import ComplectModal from "../../../../Common/complectModal";

const ComplectEditSection = (props)=>{
    let complects = props.props.order.complects;
    let [activeModal,setActiveModal] = useState(false);
    let [activeComplectModal,setActiveComplectModal] = useState(false);
    let [complectID,setComplectID] = useState(null);
    const addDetail = (id)=>{
        setComplectID(id);
        setActiveModal(true);
    }
    const addComplect = (id)=>{
        setActiveComplectModal(true);
    }

    let table = complects.map((item,i)=>{
        let details = item.complect_items.map((detal,j)=>{
            return <tr key={detal.id}>
                <td>{detal.name}</td>
                <td>{detal.articul}</td>
                <td>{detal.material}</td>
                <td>{detal.height}x{detal.width}x{detal.weight}</td>
                <td>{detal.amount}</td>
                <td>{detal.price}</td>
                <td>{detal.status}</td>
                <td>{detal.sort}</td>
                <td>{detal.local}</td>
                <td><button>delete</button></td>
            </tr>
        })
        return <table key={item.id} className={c.table_st}>
            <caption>{item.type}</caption>
            <thead>
            <tr>
                <th>наименование</th>
                <th>артикул</th>
                <th>материал</th>
                <th>р-р</th>
                <th>к-во</th>
                <th>цена</th>
                <th>статус</th>
                <th>сорт</th>
                <th>место</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {details}
            <tr><td><button onClick={()=>addDetail(item.id)}>add detail</button></td></tr>
            </tbody>
        </table>
    })
    return(
        <div>
            <ComplectModal active={activeComplectModal}
                           orderId={props.props.order.id}
                           setActive={setActiveComplectModal}
                           getState={props.getState}
                           createComplect={props.createComplect}
                           number={props.props.order.number}
            />
            <DetailModal active={activeModal}
                         material={props.props.material}
                         price={props.props.price}
                         setActive={setActiveModal}
                         complID={complectID}
                         getPrice={props.getPrice}
                         saveChange={props.saveChange}
                         getState={props.getState}
                         number={props.props.order.number}
            />
            {table}
            <button onClick={addComplect}>Добавить комплект</button>
        </div>
    )
}

export default ComplectEditSection;
