
import React,{createContext,useReducer} from 'react'
import authReducer from './authReducer'


const initContext = {
    isLoggedIn: false,
    googleToken: null,
    BECLToken: null,
    logIn: () => {},
    setGoogleToken: (googleToken) => {},
    logout: () => {},
    setBECLToken: (BECLToken) => {},
}

export const AuthContext = createContext(initContext)
export const AuthProvider = ({children}) => {
    const [authState,despatch] = useReducer(authReducer, initContext);
    const logIn = () => {
        despatch({type: 'singIn'})
    }
    const setGoogleToken = (googleToken) => {
        despatch({type: 'setGoogleToken',payload: googleToken})
    }
    const logOut = () => {
        despatch({type: 'logOut'})
    }
    const setBECLToken = (BECLToken) => {
        despatch({type: 'setBECLToken',payload: BECLToken})
    }
    return (
        <AuthContext.Provider
            value={{
                authState,
                logIn,
                setGoogleToken,
                logOut,
                setBECLToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}