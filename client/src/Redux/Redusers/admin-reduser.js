import {supportAPI, usersAPI} from "../../Api/api";

const SET_STATE = 'SET_STATE';
const SET_SELECT = 'SET_SELECT';
const CHANGE_FIELD = 'CHANGE_FIELD';
const ADD_DISPLAY = 'ADD_DISPLAY';
const DELETE_DISPLAY = 'DELETE_DISPLAY';

let initialState = {
    materials:[],
    material:[],
    selectElement:0,
    displays:[],
}

const AdminReduser = (state=initialState,action)=>{
    switch (action.type){
        case SET_STATE:{
            let newState = {...state};
            newState.materials = [...action.data.mats];
            newState.material = [...action.data.mat];
            return newState
        }
        case SET_SELECT:{
            let newState = {...state};
            newState.selectElement = action.data;
            return newState;
        }
        case CHANGE_FIELD:{
            let newState = {...state};
            newState.materials.forEach((item)=>{
                if(item.id===action.data.id){
                    item[action.data.field] = action.data.value;
                }
            })
            return newState;
        }
        case ADD_DISPLAY:{
            let newState = {...state};
            let flag = true;
            newState.displays.forEach(item=>{
                if(item.type.type.displayName===action.data.type.type.displayName){
                    flag = false;
                }
            })
            if(flag){
                newState.displays.push(action.data);
            }
            return newState;
        }
        case DELETE_DISPLAY:{
            let newState = {...state};
            newState.displays.forEach((item,i)=>{
                if(item.type.type.displayName===action.data){
                    newState.displays.splice(i,1);
                }
            })
            return newState;
        }
        default:return state
    }
}

export const setState = (data)=>({type:SET_STATE,data});
export const setSelect = (data)=>({type:SET_SELECT,data});
export const changeField = (data)=>({type:CHANGE_FIELD,data});
export const addDisplay = (data)=>({type:ADD_DISPLAY,data});
export const deleteDisplay = (data)=>({type:DELETE_DISPLAY,data});

export const setStateThunkCreator = ()=>{
    return(dispatch)=>{
        supportAPI.getMaterials().then(data=>{
            dispatch(setState(data))
        })
    }
}
export const addMaterialsThunkCreator = ()=>{
    let body = {
        name:'name',
        USD:0.0,
        EUR:0.0,
        RUR:0.0,
        BLR:0.0
    }
    return(dispatch)=>{
        supportAPI.addMaterial(body).then(data=>{
            if(data){
                supportAPI.getMaterials().then(data=>{
                    dispatch(setState(data))
                })
            }
        })
    }
}

export const saveMatThunkCreator = (body)=>{
    return(dispatch)=>{
        supportAPI.updateMaterial(body).then(data=>{
            if(data){
                supportAPI.getMaterials().then(data=>{
                    dispatch(setState(data))
                })
            }
        })
    }
}
export const addUserThunkCreator = (body)=>{
    return(dispatch)=>{
        usersAPI.registrationUser(body).then(data=>{

        })
    }
}

export default AdminReduser;