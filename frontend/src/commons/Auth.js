import {  createContext, useContext, useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { createBrowserHistory } from 'history';

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user,SetUser] = useState(null)
    const location = useLocation()
    const [route, setRoute] = useState({ //--> It can be replaced with useRef or localStorage
        to: location.pathname,
        from: location.pathname //--> previous pathname
    });

    useEffect( ()=>{
        setRoute((prev)=> ({to: location.pathname, from: prev.to}) )
    }, [location])
    const login = (user) => {
        SetUser(user)
    }

    const logout = () =>{
        SetUser(null)
    }

    return <AuthContext.Provider value={ {user,login,logout,route} }>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () =>{
    return useContext(AuthContext)
}