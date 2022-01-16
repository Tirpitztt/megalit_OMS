import c from './details.module.css'
import DetailsInfo from './DetailsInfo/detailsInfo'
import MainInfo from './MainInfo/mainInfo'
import {NavLink} from "react-router-dom";
import {useMaterials} from "../../../Hooks/material.hook";
import {materialContext} from "../../../Context/material.Context";

const OrderDetails = (props)=>{

    const clear = ()=>{
        props.clear();
    }
    let [materials] = useMaterials();
    //debugger;
    return(
        <div className={c.container}>
            <div className={c.navig}>
                <div>Информация о заказе </div>
                <div className={c.back_but} onClick={clear}>назад</div>
                <NavLink className={c.back_but}
                         to={'/edit_order/'+props.props.order.order.number}>изменить</NavLink>
                <NavLink className={c.back_but}
                         to={'/print/'+props.props.order.order.number}>распечатать</NavLink>
                <div className={c.back_but} onClick={()=>props.delOrder(props.props.order.order.number)}>удалить</div>
            </div>
            <materialContext.Provider value={materials}>
            <MainInfo props={props.props} modal={props.modal} active={props.active} setPayment={props.setPayment}/>
            <DetailsInfo props={props.props.order.order}/>
            </materialContext.Provider>
        </div>

    )
}

export default OrderDetails;