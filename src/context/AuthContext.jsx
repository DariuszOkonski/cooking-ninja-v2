import { createContext, useReducer } from 'react';
import { LOGIN } from './../utilities/constants';

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    
    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}