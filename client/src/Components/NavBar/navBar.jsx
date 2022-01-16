import c from './navbar.module.css'
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../Context/auth.context";

const Navbar = (props)=>{
    let {userRole,userName} = useContext(AuthContext);
    let adminButton = <div></div>;
    if(userRole==='konung'){
        adminButton = <div className={c.button}>
            <NavLink to='/admin'><p>ADM</p></NavLink>
        </div>
    }
    console.log(userRole);
    let path = {
        home:'/home',
        db:'/db',
        create:'/ordernew'
    }

    return(
        <div className='nav'>
            <p>{userName}</p>
            <div className={c.butt_container}>
                <div className={c.button}>
                    <NavLink to={path.home}><p>Дом</p></NavLink>
                </div>
                <div className={c.button}>
                    <NavLink to={path.db}><p>БД</p></NavLink>
                </div>
                <div className={c.button}>
                    <NavLink to={path.create}><p>Нов</p></NavLink>
                </div>
                {adminButton}
            </div>
        </div>
    )
}

export  default Navbar;