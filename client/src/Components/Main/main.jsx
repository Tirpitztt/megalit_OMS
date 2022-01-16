import React, {useContext} from "react";
import c from "./main.module.css";
import {AuthContext} from "../../Context/auth.context";
import AdminContent from "./Displays/AdminContent/admin-content";



export const MainPage = (props)=>{

    let {userRole,userName} = useContext(AuthContext);
    let content = <div>seller content</div>;
    if(userRole==='konung'){
        content = <AdminContent state={props.state}/>
    }else if(userRole==='lenderman'){
        content = <div>manager content</div>
    }

    return(
        <div className={c.wrap}>
            <div className={c.title_box}><p className={c.title}>Добро пожаловать на работу, <span>{userName}</span>, приятного дня.</p></div>
            {content}
        </div>

    );
}

export default MainPage;