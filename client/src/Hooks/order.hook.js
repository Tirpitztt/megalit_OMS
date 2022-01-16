import {useEffect, useState} from "react";
import {ordersAPI} from "../Api/api";


export const useOrder = (number)=>{
    console.log(number);
    let [order,setOrder] = useState({});
    useEffect(()=>{
        ordersAPI.getOrder(number).then(data=>{
            setOrder(data);
            console.log(data);
        })
    },[])
    return order;
}