import React from "react";
import {Routes,Route} from "react-router-dom";
import {LoginPage} from "./Components/Login/login";
import DBContainer from "./Components/DBComponent/db_container";
import MainContainer from "./Components/Main/mainContainer";
import OrderEditContainer from "./Components/Order/EditOrder/orderEditContainer";
import CreateOrderContainer from "./Components/CreateOrderComponent/createOrderContainer";
import PrintOrder from "./Components/PrintOrder/printOrder";
import AdminContainer from "./Components/Admin/adminContainer";



export const useRouts = (isAuth,userRole,props) =>{

    if(isAuth){
        if(userRole==='konung'){
            return(
                <Routes>
                    <Route path="/" element={<MainContainer />} />
                    <Route path="/home" element={<MainContainer />} />
                    <Route path="/ordernew" element={<CreateOrderContainer />} />
                    <Route path="/db" element={<DBContainer />} />
                    <Route path="/edit_order/:orderId" element={<OrderEditContainer />} />
                    <Route path="/print/:orderNum" element={<PrintOrder />} />
                    <Route path="/admin" element={<AdminContainer />} />
                </Routes>
            )
        }
        return(
            <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route path="/home" element={<MainContainer />} />
                <Route path="/ordernew" element={<CreateOrderContainer />} />
                <Route path="/db" element={<DBContainer />} />
                <Route path="/edit_order/:orderId" element={<OrderEditContainer />} />
                <Route path="/print/:orderNum" element={<PrintOrder />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<LoginPage />} />
        </Routes>
    )
}