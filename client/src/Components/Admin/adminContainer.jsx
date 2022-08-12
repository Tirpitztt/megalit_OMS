import * as React from 'react'
import AdminPage from "./admin-page";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addDisplay,
    setStateThunkCreator, deleteDisplay
} from "../../Redux/Redusers/admin-reduser";


class AdminContainer extends React.Component{
    componentDidMount() {
        this.props.setState();
    }


    render(){
        return(
            <AdminPage state={this.props.state.adminPage}
                       addDisp={this.props.addDisplay}
                       delDisp={this.props.deleteDisplay}
                       />
        )
    }

}

let mapStateToProps = (state)=>{
    return{state}
}
let mapDispatchToProps = (dispatch)=>{
    return {
        setState:()=>{
            dispatch(setStateThunkCreator());
        },
        addDisplay:(body)=>{
            dispatch(addDisplay(body));
        },
        deleteDisplay:(body)=>{
            dispatch(deleteDisplay(body));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(AdminContainer);