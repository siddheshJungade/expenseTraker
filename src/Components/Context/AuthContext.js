import React, { useReducer } from "react";
import AuthReducer from './AuthReducer';


const auth = {
    authentication: false,
}


export const AuthenticationContext = React.createContext();




export const AuthContext = (props) => {
    const [authState, dispatch] = useReducer(AuthReducer, auth)

    

    return <AuthenticationContext.Provider value={{ ...authState}}>
        {props.children}
    </AuthenticationContext.Provider>

}
