import {calculationAPI, ordersAPI, supportAPI} from "../../Api/api";
import {setToday} from "../../Utils/dateTermin";

const SET_ST = 'SET_ST';
const SET_EMPLOYER = 'SET_EMPLOYER';
const GET_MATERIALS = 'GET_MATERIALS';
const SET_FINDING_CUSTOMER='SET_FINDING_CUSTOMER';
const SET_COMPLECT = 'SET_COMPLECT';
const CORRECT_APPLY = 'CORRECT_APPLY';
const DELETE_COMPLECT = 'DELETE_COMPLECT';
const SET_DETAIL = 'SET_DETAIL';
const DELETE_DETAIL = 'DELETE_DETAIL';
const SET_HANDEL = 'SET_HANDEL';
const DELETE_HANDEL = 'DELETE_HANDEL';
const SET_MONTAZ = 'SET_MONTAZ';
const DELETE_MONTAZ = 'DELETE_MONTAZ';
const SET_TOTAL_COST= 'SET_TOTAL_COST';
const SET_TEXT_GRAVI = 'SET_TEXT-GRAVI';
const CHANGE_HYDRO = 'CHANGE_HYDRO';
const SET_SIZE_MONTAZ = 'SET_SIZE_MONTAZ';
const SET_DELIVERI = 'SET_DELIVERY';
const SET_DELIVERI_POINT = 'SET_DELIVERI_POINT';
const SET_TERMIN = 'SET_TERMIN';
const SET_PAYMENT = 'SET_PAYMENT';
const SET_DISCOUNT = 'SET_DISCOUNT';
const CHANGE_MAKER = 'CHANGE_MAKER';
const SET_STATUS_OK = 'SET_STATUS_OK';
const SET_NUMBER = 'SET_NUMBER';
const SET_SKETCH_PATH = 'SET_SKETCH_PATH';
const CLEAR_STATE = 'CLEAR_STATE';

let initialState = {
    customer:{
        findingCustomer:{},
        allCustomers:[]
    },
    newOrder:{
        complects:[],
        handlings:{
            hydrophob:false,
            text_gravi:'',
            sketchPath:'',
            details:[]
        },
        montaz:{
            size:'',
            delivery:0,
            deliveryPoint:'Бобруйск',
            details:[]
        },
        calculation:{
            new_total_cost:0,
            discount:0,
            payments:[]
        }
    },
    orderOption:{
        today:'',
        termin:'',
        maker:'megalit',
        employer:{
            id:2,
            name:'света'
        },
        status:'принят'
    },
    status_OK:true,
    number:null,
    materials:[]
}

const NeworderReduser = (state=initialState, action)=>{

    switch(action.type){
        case SET_EMPLOYER:{
            let newState = {...state};
            newState.orderOption.employer = action.data;
            return newState;
        }
        case SET_ST:{
            let newState = {...state};
            newState.customer.allCustomers = action.data;
            return newState;
        }
        case SET_FINDING_CUSTOMER:{
            let newState = {...state}
            newState.customer.findingCustomer = action.data;
            return newState;
        }

        case SET_COMPLECT:{
            let newState = {...state};
            newState.newOrder.complects = [...state.newOrder.complects,action.complect];
            return newState;
        }
        case CORRECT_APPLY:{
            let newState = {...state};
            newState.newOrder.complects = [...state.newOrder.complects];
            newState.newOrder.complects.forEach((item)=>{
                if(item.number==action.data.num){
                    item.summCompl = 0;
                    item.details.forEach((detail)=>{
                        item.summCompl += ((detail.price)*(detail.amount));
                    })
                    item.summCompl += Number(action.data.correct);
                }
            })
            return newState;
        }
        case DELETE_COMPLECT:{
            let newState = {...state};
            let result = [];
            state.newOrder.complects.forEach((item)=>{
                if(item.number!==action.data){
                    result.push(item);
                }
            })
            newState.newOrder.complects=result;
            return newState;
        }
        case SET_MONTAZ:{
            let newState = {...state};
            newState.newOrder.montaz.details = [...state.newOrder.montaz.details,action.montaz];
            return newState;
        }
        case DELETE_MONTAZ:{
            let newState = {...state};
            newState.newOrder.montaz.details =
                newState.newOrder.montaz.details.filter(item=>item.id!==action.data);
            return newState;
        }
        case SET_SIZE_MONTAZ:{
            let newState = {...state};
            newState.newOrder.montaz.size = action.data;
            return newState;
        }
        case SET_DELIVERI:{
            let newState = {...state};
            newState.newOrder.montaz.delivery = action.data;
            return newState;
        }
        case SET_DELIVERI_POINT:{
            let newState = {...state};
            newState.newOrder.montaz.deliveryPoint = action.data;
            return newState;
        }
        case SET_DETAIL:{
            let newState = {...state};
            newState.newOrder.complects = [...state.newOrder.complects];
            newState.newOrder.complects.forEach((item)=>{
                if(item.number==action.detail.ind){
                    //console.log('reduse:',action.detail.price);
                    item.summCompl += ((action.detail.price)*(action.detail.amount));
                    item.details.push(action.detail);
                }
            })
            return newState;
        }
        case DELETE_DETAIL:{
            let newState = {...state};
            let complects = [...state.newOrder.complects];
            complects.forEach((item)=>{
                if(item.number==action.data.ind){
                    item.details = item.details.filter(detail=>detail.id!==action.data.id);
                }
            })
            newState.newOrder.complects=[...complects];
            return newState;
        }
        case SET_HANDEL:{
            let newState = {...state};
            newState.newOrder.handlings.details = [...state.newOrder.handlings.details,action.handel];
            return newState;
        }
        case DELETE_HANDEL:{
            let newState = {...state};
            newState.newOrder.handlings.details =
                newState.newOrder.handlings.details.filter(hand=>hand.id!==action.data);
            return newState;
        }
        case SET_TOTAL_COST:{
            let newState = {...state};
            newState.newOrder.calculation.new_total_cost = action.data.totalCost;
            return newState;
        }
        case SET_TEXT_GRAVI:{
            let newState = {...state};
            newState.newOrder.handlings.text_gravi = action.data;
            return newState;
        }
        case CHANGE_HYDRO:{
            let newState = {...state};
            newState.newOrder.handlings.hydrophob = action.data;
            return newState;
        }
        case SET_TERMIN:{
            let newState = {...state};
            newState.orderOption.today = setToday();
            newState.orderOption.termin = action.data;
            return newState;
        }
        case SET_PAYMENT:{
            let newState = {...state};
            newState.newOrder.calculation.payments[0] = action.data;
            return newState;
        }
        case SET_DISCOUNT:{
            let newState = {...state};
            newState.newOrder.calculation.discount = Number(action.data);
            return newState;
        }
        case CHANGE_MAKER:{
            let newState = {...state};
            newState.orderOption.maker = action.data;
            return newState;
        }
        case SET_STATUS_OK:{
            let newState = {...state};
            newState.status_OK = action.bool;
            return newState;
        }
        case SET_NUMBER:{
            let newState = {...state};
            newState.number = action.number;
            return newState;
        }
        case GET_MATERIALS:{
            let newState = {...state};
            newState.materials = action.data;
            return newState;
        }
        case SET_SKETCH_PATH:{
            let newState = {...state};
            newState.newOrder.handlings.sketchPath = action.data;
            return newState;
        }
        case CLEAR_STATE:{
            let newState = {
                customer:{
                    findingCustomer:{},
                    allCustomers:[]
                },
                newOrder:{
                    complects:[],
                    handlings:{
                        hydrophob:false,
                        text_gravi:'',
                        sketchPath:'',
                        details:[]
                    },
                    montaz:{
                        size:'',
                        delivery:0,
                        deliveryPoint:'Бобруйск',
                        details:[]
                    },
                    calculation:{
                        new_total_cost:0,
                        discount:0,
                        payments:[]
                    }
                },
                orderOption:{
                    today:'',
                    termin:'',
                    maker:'megalit',
                    employer:{
                        id:2,
                        name:'света'
                    },
                    status:'принят'
                },
                status_OK:true,
                materials:[]
            };
            return newState;
        }
        default:return state
    }

}

export const setState = (data)=>({type:SET_ST,data});
export const setFindingCustomer = (data)=>({type:SET_FINDING_CUSTOMER,data});
export const setEmployer = (data)=>({type:SET_EMPLOYER,data});
export const setComplect = (complect)=>({type:SET_COMPLECT,complect});
export const correctApply = (data)=>({type:CORRECT_APPLY,data});
export const setMontaz = (montaz)=>({type:SET_MONTAZ,montaz});
export const setDetail = (detail)=>({type:SET_DETAIL,detail});
export const setNewTotalCost = (data)=>({type:SET_TOTAL_COST,data});
export const setTextGravi = (data)=>({type:SET_TEXT_GRAVI,data});
export const changeHydro = (data)=>({type:CHANGE_HYDRO,data});
export const setHandel = (handel)=>({type:SET_HANDEL,handel});
export const deleteDetail = (data)=>({type:DELETE_DETAIL,data});
export const deleteComplect = (data)=>({type:DELETE_COMPLECT,data});
export const deleteHandel = (data)=>({type:DELETE_HANDEL,data});
export const deleteMontaz = (data)=>({type:DELETE_MONTAZ,data});
export const setSizeMontaz = (data)=>({type:SET_SIZE_MONTAZ,data});
export const setDelivery = (data)=>({type:SET_DELIVERI,data});
export const setDeliveryPoint = (data)=>({type:SET_DELIVERI_POINT,data});
export const setTermin = (data)=>({type:SET_TERMIN,data});
export const setPayment = (data)=>({type:SET_PAYMENT,data});
export const setDiscount = (data)=>({type:SET_DISCOUNT,data});
export const changeMaker = (data)=>({type:CHANGE_MAKER,data});
export const setStatusOK = (bool)=>({type:SET_STATUS_OK,bool});
export const setNumber = (number)=>({type:SET_NUMBER,number});
export const getMaterials = (data)=>({type:GET_MATERIALS,data});
export const setSketchPath = (data)=>({type:SET_SKETCH_PATH,data});
export const clear = ()=>({type:CLEAR_STATE});

export const getAllCustomersThunkCreator = ()=>{
    return(dispatch)=>{
        ordersAPI.getOnlyCustomers().then(data=>{
            dispatch(setState(data));
        })
    }
}
export const getMatThunkCreator = ()=>{
    return(dispatch)=>{
        supportAPI.getMaterials().then(data=>{
            dispatch(getMaterials(data));
        })
    }
}
export const findCustomerByIdThunkCreator = (id)=>{
    return(dispatch)=>{
        ordersAPI.getCustomerById(id).then(data=>{
            dispatch(setFindingCustomer(data));
        })
    }
}

export const createTotalCostThunkCreator = (order)=>{
    return(dispatch)=>{
        calculationAPI.createTotalCost(order).then(data=>{
            dispatch(setNewTotalCost(data));
        })
    }
}

export const createOrderThunkCreator = (state)=>{
    return(dispatch)=>{
        ordersAPI.orderCreate(state).then(resp=>{
            if(resp.status=='NOK'){
                dispatch(setStatusOK(false));
            }else if(resp.status<400){
                dispatch(setStatusOK(true));
                console.log(resp);
                dispatch(setNumber(resp.data.number));
            }
        })
    }
}


export default NeworderReduser;