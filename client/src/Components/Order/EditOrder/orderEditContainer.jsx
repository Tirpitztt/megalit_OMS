import * as React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import OrderEdit from "./orderEdit";
import {
    changeState, createComplectThunkCreator,
    getOrderThunkCreator, getPriceThunkCreator,
    saveChangeThunkCreator,
    trueOrder
} from "../../../Redux/Redusers/order-reduser";
import {setActiveModal} from "../../../Redux/Redusers/modal-reduser";


class OrderEditContainer extends React.Component{

    componentDidMount() {

    }
    componentWillUnmount() {
        this.props.downFlag(false);
    }

    render(){
        return(
            <OrderEdit state={this.props.state.orderPage}
                       getState={this.props.getState}
                       getPrice={this.props.setPrice}
                       changeState={this.props.changeSt}
                       saveCh={this.props.saveChange}
                       modal={this.props.setActiveModal}
                       createCompl={this.props.createComplect}
            />
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        state:state
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        getState:(number)=>{
            dispatch(getOrderThunkCreator(number))
        },
        downFlag:(bool)=>{
            dispatch(trueOrder(bool))
        },
        changeSt:(data)=>{
            dispatch(changeState(data))
        },
        saveChange:(body)=>{
            dispatch(saveChangeThunkCreator(body))
        },
        setActiveModal:(bool)=>{
            dispatch(setActiveModal(bool));
        },
        setPrice:(detail,zero)=>{
            dispatch(getPriceThunkCreator(detail,zero));
        },
        createComplect:(body)=>{
            dispatch(createComplectThunkCreator(body));
        }

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(OrderEditContainer)