import { useState } from "react";
import { createContext, useContext } from "react";


const ThemeContext = createContext()

export function ThemeProvider(props){

    const themeLocalStorage = localStorage.getItem('theme')
    // State que irá controlar qual Tema a aplicação está usando
    const [theme, setTheme] = useState(themeLocalStorage || "")

    function changeTheme(themeReceived){

        if(themeReceived !== 'dark'){

            setTheme('dark')
            localStorage.setItem("theme", 'dark')
        }
        else{
            setTheme('')
            localStorage.setItem("theme", '')

        }
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export function useTheme() {

    const context = useContext(ThemeContext)

    return context

}