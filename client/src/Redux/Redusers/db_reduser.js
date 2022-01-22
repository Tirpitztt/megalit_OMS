import {calculationAPI, ordersAPI} from "../../Api/api";

const SET_DB = 'SET_DB';
const GET_ORDER_NUM = 'GET_ORDER_NUM';
const FIND_ORDER_OF_NAME = 'FIND_ORDER_OF_NAME';
const CLEAR_ORDER = 'CLEAR_ORDER';


let initialState = {
    db:[],
    order:{}
}

const DBReduser = (state=initialState,action)=>{
    switch(action.type){
        case SET_DB: {
            let newState = {...state};
            newState.db = [...action.db.customers];
            return newState;
        }
        case GET_ORDER_NUM:{
            let newState = {...state};
            let arr = [...state.db];
            arr.forEach(customer=>{
                customer.orders.forEach(order=>{
                    if(order.number==action.number){
                        let newOrder = {
                            number:order.number,
                            name:customer.full_name,
                            phone:customer.phone,
                            order:{order}
                        }
                        newState.order = newOrder;
                    }
                })
            })
            return newState;
        }
        case FIND_ORDER_OF_NAME:{
            let newState = {...state};
            let findingList = [];
            state.db.forEach((item)=>{

            })
            return newState;
        }
        case CLEAR_ORDER:{
            let newState = {...state};
            newState.order = {};
            return newState;
        }
        default:return state;
    }
}

export const setDB = (db)=>({type:SET_DB,db})
export const getOrder = (number)=>({type:GET_ORDER_NUM,number})
export const clearOrder = ()=>({type:CLEAR_ORDER})

export const getOrdersThunkCreator = ()=>{
    return(dispatch)=>{
        ordersAPI.getOrders().then(data=>{
            dispatch(setDB(data))})
    }
}
export const delOrderThunkCreator = (num)=>{
    return(dispatch)=>{
        ordersAPI.deleteOrder(num).then(data=>{
           if(data){
               ordersAPI.getOrders().then(data=>{
                   dispatch(setDB(data));
                   dispatch(clearOrder());
               })
           }
        })
    }
}
export const setPaymentThunkCreator = (body)=>{
    return(dispatch)=>{
        calculationAPI.setPayment(body).then(data=>{
            ordersAPI.getOrders().then(data=>{
                dispatch(setDB(data));
                dispatch(getOrder(body.number));
            })
        })
    }
}


export default DBReduser;