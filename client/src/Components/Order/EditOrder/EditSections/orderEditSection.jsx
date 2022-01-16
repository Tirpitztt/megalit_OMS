import c from './sections.module.css'
import ConfirmModal from "../../../Common/confirmModal";
import TerminEditSection from "./TerminsSection/terminEditSection";
import ComplectEditSection from "./ComplectSection/complectEditSection";

const OrderEditSection = (props)=>{

    let obj = {
        type:'order',
        order:{
            id:props.props.order.id
        }
    }
    return(
        <div className={props.active?c.active:c.section_wrapper}>
            <ConfirmModal />
            <div className={c.content_box}>
                <div className={c.head_section}>
                    <div><p>ID: <span>{props.props?obj.order.id:'-'}</span></p></div>
                    <div><p>Номер заказа: <span>{props.props.order.number}</span></p></div>
                </div>
                <div>
                    <TerminEditSection props={props.props.order.termin}
                                       changeSt={props.changeSt}
                                       saveChange={props.saveChange}
                    />

                </div>
                <div>
                    <p>Комплектация</p>
                    <ComplectEditSection props={props.props}
                                         getPrice={props.getPrice}
                                         saveChange={props.saveChange}
                                         changeSt={props.changeSt}
                                         getState={props.getState}
                                         createComplect={props.createComplect}
                    />
                </div>
                <div><p>Обработка</p></div>
                <div><p>Монтаж</p></div>
            </div>
        </div>
    )
}

export default OrderEditSection;