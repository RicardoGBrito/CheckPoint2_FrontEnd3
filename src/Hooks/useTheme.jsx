import { useReducer } from "react";
import { createContext, useContext } from "react";


const ThemeContext = createContext()

function themeReducer(currentTheme, action) {
    switch (action.type) {
        case 'toggle_theme':
            if (action.payload.theme !== currentTheme) {

                localStorage.setItem('theme', action.payload.theme)
                return action.payload.theme

            }
        default:
            throw new Error();
    }   
}

function getThemeFromStorage() {

    const themeLocalStorage = localStorage.getItem('theme')
    return themeLocalStorage || "light"

}

export function ThemeProvider(props) {
 
    // State que irá controlar qual Tema a aplicação está usando
    const [theme, themeDispatch] = useReducer(themeReducer, {}, getThemeFromStorage)

    function changeTheme(newTheme) {
        themeDispatch({ type: "toggle_theme", payload: {theme: newTheme} })
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {

    const context = useContext(ThemeContext)

    return context

}