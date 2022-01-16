import * as React from 'react'
import CreateOrder from './createOrder'
import {compose} from "redux";
import {connect} from "react-redux";
import {
    changeHydro,
    changeMaker,
    clear,
    createOrderThunkCreator,
    createTotalCostThunkCreator,
    deleteComplect,
    deleteDetail,
    deleteHandel,
    deleteMontaz,
    getAllCustomersThunkCreator,
    getMatThunkCreator,
    setComplect,
    setDelivery,
    setDeliveryPoint,
    setDetail,
    setDiscount,
    setEmployer,
    setFindingCustomer,
    setHandel,
    setMontaz,
    setPayment,
    setSizeMontaz,
    setTermin,
    setTextGravi
} from "../../Redux/Redusers/neworder-reduser";
import {setDateTermin} from "../../Utils/dateTermin";
import {useContext} from "react";
import {AuthContext} from "../../Context/auth.context";

class CreateOrderContainer extends React.Component{
    componentDidMount() {
        this.props.getCustomers();
        this.props.setTermin(setDateTermin());
        this.props.getMaterials();
    }
    componentWillUnmount() {
        this.props.clearState();
    }

    render(){
        return(
            <CreateOrder state={this.props.state.newOrderPage}
                         setEmployer={this.props.setEmployer}
                         setFindCust={this.props.setFindCust}
                         setComplect={this.props.setComplect}
                         delCompl={this.props.delComplect}
                         setDetail={this.props.setDetail}
                         delDetal={this.props.delDetal}
                         setHand={this.props.setHandel}
                         delHand={this.props.delHand}
                         setText={this.props.setText}
                         changeHydro={this.props.changeHydro}
                         setMontaz={this.props.setMontaz}
                         setDelivery={this.props.setDelivery}
                         setDeliveryPoint={this.props.setDeliveryPoint}
                         setSizeMontaz={this.props.setSizeMontaz}
                         setTermin={this.props.setTermin}
                         delMontaz={this.props.deleteMontaz}
                         setTotal={this.props.setTotalCost}
                         setDiscount={this.props.setDiscount}
                         makerChange={this.props.makerChange}
                         orderCreate={this.props.createNewOrder}
                         setPayment={this.props.setPayment}
                         clearState={this.props.clearState}
                                />
        )
    }

}


let mapStateToProps = (state)=>{
    return{
        state
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        setEmployer:(data)=>{
           dispatch(setEmployer(data));
        },
        getCustomers:()=>{
          dispatch(getAllCustomersThunkCreator());
        },
        setFindCust:(data)=>{
          dispatch(setFindingCustomer(data));
        },
        setComplect:(data)=>{
            dispatch(setComplect(data));
        },
        setDetail:(detail)=>{
            dispatch(setDetail(detail));
        },
        delDetal:(data)=>{
          dispatch(deleteDetail(data));
        },
        delComplect:(data)=>{
            dispatch(deleteComplect(data));
        },
        setHandel:(handel)=>{
          dispatch(setHandel(handel));
        },
        delHand:(data)=>{
          dispatch(deleteHandel(data));
        },
        changeHydro:(data)=>{
          dispatch(changeHydro(data));
        },
        setText:(data)=>{
            dispatch(setTextGravi(data));
        },
        setMontaz:(montaz)=>{
            dispatch(setMontaz(montaz));
        },
        setSizeMontaz:(data)=>{
          dispatch(setSizeMontaz(data));
        },
        setDelivery:(data)=>{
          dispatch(setDelivery(data));
        },
        setDeliveryPoint:(data)=>{
            dispatch(setDeliveryPoint(data));
        },
        deleteMontaz:(id)=>{
          dispatch(deleteMontaz(id));
        },
        setTotalCost:(order)=>{
            dispatch(createTotalCostThunkCreator(order));
        },
        setTermin:(data)=>{
            dispatch(setTermin(data));
        },
        setPayment:(data)=>{
            dispatch(setPayment(data));
        },
        setDiscount:(data)=>{
            dispatch(setDiscount(data));
        },
        makerChange:(data)=>{
            dispatch(changeMaker(data));
        },
        createNewOrder:(body)=>{
            dispatch(createOrderThunkCreator(body));
        },
        getMaterials:()=>{
          dispatch(getMatThunkCreator())
        },
        clearState:()=>{
            dispatch(clear());
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(CreateOrderContainer);