import * as React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {
    addDisplay, deleteDisplay,
    setStateThunkCreator
} from "../../../Redux/Redusers/admin-reduser";
import BetonDisplay from "./beton-display";

class BetonContainer extends React.Component{
    render(){
        return(
            <BetonDisplay state={this.props.state.adminPage}
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
)(BetonContainer)