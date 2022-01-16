import React, {useEffect, useState} from 'react'
import c from './dbpage.module.css'
import OrderDetails from "./OrderDetails/order-details";
import DBList from './DBList/db_list'
import {nameSort} from "../../Utils/nameSort";

const DBPage = (props)=>{
    let isOrder = Object.entries(props.state.order).length;
    let content = <div>Загрузка....</div>
    let [searchList,setSearchList] = useState([]);
    useEffect(()=>{
        setSearchList(props.state.db);
    },[props])
    const changeSearch = (e)=>{
        setSearchList([]);
        let substr = e.target.value;
        let res = nameSort(props.state.db,substr,'last_name');
        setSearchList(res);
    }
    if(isOrder){
        content = <OrderDetails props={props.state.order}
                                modal={props.modal}
                                clear={props.clear}
                                delOrder={props.delOrder}
                                active={props.active}
                                setPayment={props.setPayment}
                                setOS={props.setOS}
        />
    }else if(props.state.db.length){


        let orders = searchList.map((customer,i)=>{
            return <DBList customer={customer} key={i} click={props.getOrder}/>
        })

        content = <div className={c.content}>
            <div className={c.inst_item}>
                <input type="text" placeholder="поиск" className={c.search_f} onChange={changeSearch}/>
            </div>
            <div className={c.orders_wrap}>
                {orders}
            </div>
        </div>
    }
    return(
        <div className='db_wrapper'>
            <div className={c.db_display}>
                    {content}
            </div>
        </div>
    )
}

export default DBPage;