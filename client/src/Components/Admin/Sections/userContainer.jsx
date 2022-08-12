import * as React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {
    addDisplay, addUserThunkCreator, deleteDisplay,
    setStateThunkCreator
} from "../../../Redux/Redusers/admin-reduser";
import UserSection from "./user-section";

class UserContainer extends React.Component{
    render(){
        return(
            <UserSection state={this.props.state.adminPage}
                            addUser={this.props.addUser}
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
        addUser:(body)=>{
            dispatch(addUserThunkCreator(body));
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
)(UserContainer)