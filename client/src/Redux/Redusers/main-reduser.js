
const GET_ALL = 'GET_ALL';
const GET_ORDER_ID = 'GET_ORDER_ID';
const FIND_ORDER_OF_NAME = 'FIND_ORDER_OF_NAME';


let initialState = {
    user:{},
    adminInfo:{
        countOrders:{
            все_заказы:0,
            ordersInWork:0,
            redOrders:0
        },
        balance:{
            allCost:0,
            avanses:0,
            totalBalance:0
        }

    }
}

const MainReduser = (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL: {
            return state;
        }
        case GET_ORDER_ID:{
            return state;
        }
        case FIND_ORDER_OF_NAME:{
            return state;
        }
        default:return state;
    }
}

export default MainReduser;