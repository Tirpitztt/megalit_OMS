import {applyMiddleware,combineReducers, createStore} from "redux";
import MainReduser from "./Redusers/main-reduser";
import DBReduser from "./Redusers/db_reduser";
import ModalReduser from "./Redusers/modal-reduser";
import OrderReduser from "./Redusers/order-reduser";
import CreateOrder from "./Redusers/neworder-reduser";
import thunkMiddleware from 'redux-thunk';
import AdminReduser from "./Redusers/admin-reduser";



let redusers = combineReducers({
    mainPage:MainReduser,
    dbPage:DBReduser,
    modal:ModalReduser,
    orderPage:OrderReduser,
    newOrderPage:CreateOrder,
    adminPage:AdminReduser
})

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

export default store;