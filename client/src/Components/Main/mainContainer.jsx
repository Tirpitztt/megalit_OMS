import * as React from "react";
import MainPage from './main';
import {compose} from "redux";
import {connect} from "react-redux";

class MainContainer extends React.Component{
    render(){
        return(
            <MainPage state={this.props.state.mainPage}/>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        state:state
    }
}

export default compose(
    connect(mapStateToProps)
)(MainContainer)