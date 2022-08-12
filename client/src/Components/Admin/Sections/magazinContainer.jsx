import * as React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import MagazinDisplay from "./magazin-display";
import {
    addDisplay, deleteDisplay,
    setStateThunkCreator
} from "../../../Redux/Redusers/admin-reduser";

class MagazinContainer extends React.Component{
    render(){
        return(
            <MagazinDisplay state={this.props.state.adminPage}
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
)(MagazinContainer)