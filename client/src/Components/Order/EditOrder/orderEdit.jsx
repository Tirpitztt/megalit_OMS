import c from './orderedit.module.css'
import {useParams} from "react-router-dom";
import CustomerEditSection from "./EditSections/customerEditSection";
import OrderEditSection from "./EditSections/orderEditSection";
import { useState} from "react";


const OrderEdit = (props)=>{
    const _customer = 'customer';
    const _order = 'order';
    let [activeCustomer,setActiveCustomer] = useState(false);
    let [activeOrder,setActiveOrder] = useState(false);
    let number = useParams();
    if(!props.state.isOrder){
        props.getState(number.orderId);

    }

    const showSection=(section)=>{
        switch (section){
            case _customer:{
                if(activeCustomer){
                    setActiveCustomer(false);
                }else{
                    setActiveCustomer(true);
                }
                break;
            }
            case _order:{
                if(activeOrder){
                    setActiveOrder(false);
                }else{
                    setActiveOrder(true);
                }
                break;
            }
        }
    }
    let customerSection = <CustomerEditSection props={props.state.customer}
                                               active={activeCustomer}
                                               show={showSection}
                                               changeSt={props.changeState}
                                               saveChange={props.saveCh}
                                               modal={props.modal}
    />
    let cruxSection = <OrderEditSection props={props.state}
                                        active={activeOrder}
                                        changeSt={props.changeState}
                                        saveChange={props.saveCh}
                                        show={showSection}
                                        getPrice={props.getPrice}
                                        getState={props.getState}
                                        createComplect={props.createCompl}
    />

    return(
        <div className={c.page_wrap}>
            <div className={c.title_page}><p>Изменение заказа</p></div>
            <div className={c.left_section}>
                <p className={c.customer_sec_but}
                   onClick={()=>showSection('customer')}
                >Заказчик</p>
                <div className={c.customer_section}>
                    {props.state.isOrder?customerSection:<div>Загрузка....</div>}
                </div>
            </div>
            <div className={c.right_section}>
                <p className={c.customer_sec_but}
                   onClick={()=>showSection('order')}
                >Заказ</p>
                {props.state.isOrder?cruxSection:<div>Загрузка....</div>}
            </div>

        </div>
    )
}

export default OrderEdit;