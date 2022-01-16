import {useCallback, useEffect, useState} from "react";

const storageName = 'userData';
export const useAuth = ()=>{
    const [token, setToken] = useState(null);
    const [userId,setUserId] = useState(null);
    const [userRole,setUserRole] = useState(null);
    const [userName,setUserName] = useState(null);

    const login = useCallback((jwtToken,id,role,name)=>{
        setToken(jwtToken);
        setUserId(id);
        setUserRole(role);
        setUserName(name)
        localStorage.setItem(storageName,JSON.stringify({
            userId:id,token:jwtToken,userRole:role,userName:name
        }))
    },[]);
    const logout = useCallback(()=>{
        setToken(null);
        setUserId(null);
        setUserRole(null);
        setUserName(null);
        localStorage.removeItem(storageName)
    },[]);

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName));
        if(data && data.token){
            login(data.token,data.userId,data.userRole,data.userName);
        }
    },[login])
    return {login,logout,token,userId,userRole,userName}
}