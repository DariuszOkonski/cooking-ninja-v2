import { createContext, useReducer } from "react";
import { CHANGE_COLOR, NAV_BG_COLOR_DEFAULT } from './../utilities/constants';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_COLOR:            
            return { ...state, color: action.payload }    
        default:
            return state;
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, { 
        color: NAV_BG_COLOR_DEFAULT
    })

    const changeColor = (color) => {
        dispatch({ type: CHANGE_COLOR, payload: color })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor }}>
            { children }
        </ThemeContext.Provider>
    )
}
