import * as React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {
    getOrder,
    clearOrder,
    getOrdersThunkCreator,
    delOrderThunkCreator,
    setPaymentThunkCreator
} from './../../Redux/Redusers/db_reduser'
import DBPage from './db_page';
import {setActiveModal} from "../../Redux/Redusers/modal-reduser";



class DBContainer extends React.Component{

    componentDidMount() {
        this.props.getOrders();
    }
    componentWillUnmount() {
        this.props.clearOrder();
    }


    render(){
        return(
            <DBPage state={this.props.state.dbPage}
                    modal={this.props.state.modal}
                    getOrder={this.props.getOrderOfNum}
                    delOrder={this.props.delOrder}
                    clear={this.props.clearOrder}
                    setPayment={this.props.setPayment}
                    active={this.props.setActiveModal}
            />
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        state:state
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        getOrderOfNum:(number)=>{
            dispatch(getOrder(number))
        },
        clearOrder:()=>{
            dispatch(clearOrder())
        },
        setActiveModal:(bool)=>{
            dispatch(setActiveModal(bool))
        },
        getOrders:()=>{
            dispatch(getOrdersThunkCreator())
        },
        delOrder:(num)=>{
            dispatch(delOrderThunkCreator(num))
        },
        setPayment:(body)=>{
            dispatch(setPaymentThunkCreator(body))
        }
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(DBContainer)