import c from './orderlist.module.css'

const OrdersList = (props)=>{
    const click = (e)=>{
        let select = e.target;
        let number = select.options[select.selectedIndex].value;
        if(number!='orders'){
            props.click(number);
        }
    }
    let options = props.orders.map((order,i)=>{
        return <option key={i}
                       onChange={click}
                       className={order.status==='отгружен'?c.out:c.work}
                       value={order.number}>{order.number+
        ' /  '+order.termin.date_finish}</option>
    })

    return(
        <div className={c.wrap}>
            <select className={c.select} onChange={click}>
                <option>orders</option>
                {options}
            </select>
        </div>
    )
}

export default OrdersList;