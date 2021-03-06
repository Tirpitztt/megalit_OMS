import * as React from 'react'
import AdminPage from "./admin-page";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addMaterialsThunkCreator, addUserThunkCreator,
    changeField, saveMatThunkCreator,
    setSelect,
    setStateThunkCreator
} from "../../Redux/Redusers/admin-reduser";


class AdminContainer extends React.Component{
    componentDidMount() {
        this.props.setState();
    }

    render(){
        return(
            <AdminPage state={this.props.state.adminPage}
                       addRowMat={this.props.addRowMat}
                       changeField={this.props.changeField}
                       saveMat={this.props.saveMat}
                       addUser={this.props.addUser}
                       selectEl={this.props.selectEl}/>
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
        addUser:(body)=>{
            dispatch(addUserThunkCreator(body));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(AdminContainer);