import { useState } from "react";
import { createContext, useContext } from "react";


const ThemeContext = createContext()

export function ThemeProvider(props) {

    const themeLocalStorage = localStorage.getItem('theme')
 
    // State que irá controlar qual Tema a aplicação está usando
    const [theme, setTheme] = useState(themeLocalStorage || "light")


    function changeTheme(themeReceived) {

        if (themeReceived !== theme) {

            setTheme(themeReceived)
            localStorage.setItem('theme', themeReceived)

        }
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