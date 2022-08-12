import * as React from 'react';
import MaterialSection from "./material-section";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    addDisplay,
    addMaterialsThunkCreator,
    changeField, deleteDisplay, saveMatThunkCreator,
    setSelect,
    setStateThunkCreator
} from "../../../Redux/Redusers/admin-reduser";


class MaterialContainer extends React.Component{

    render(){
        return(
            <MaterialSection state={this.props.state.adminPage}
                             addRowMat={this.props.addRowMat}
                             changeField={this.props.changeField}
                             saveMat={this.props.saveMat}
                             selectEl={this.props.selectEl}
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
        addRowMat:()=>{
            dispatch(addMaterialsThunkCreator());
        },
        selectEl:(num)=>{
            dispatch(setSelect(num));
        },
        changeField:(body)=>{
            dispatch(changeField(body));
        },
        saveMat:(body)=>{
            dispatch(saveMatThunkCreator(body));
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
)(MaterialContainer)