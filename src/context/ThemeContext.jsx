import { createContext, useReducer } from "react";
import { CHANGE_COLOR, NAV_BG_COLOR_DEFAULT, MODE_DARK, CHANGE_MODE, MODE_LIGHT } from './../utilities/constants';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_COLOR:            
            return { ...state, color: action.payload }  
        case CHANGE_MODE:
            return { ...state, mode: action.payload }
        default:
            return state;
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, { 
        color: NAV_BG_COLOR_DEFAULT,
        mode: MODE_DARK
    })

    const changeColor = (color) => {
        dispatch({ type: CHANGE_COLOR, payload: color })
    }

    const changeMode = ( mode ) => {
        dispatch({ type: CHANGE_MODE, payload: mode })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            { children }
        </ThemeContext.Provider>
    )
}
