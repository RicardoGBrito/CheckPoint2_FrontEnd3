import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const LocalStorageTokenContext = createContext()

// Criação do Provedor para o Contexto
export function LocalStorageTokenProvider(props) {

    const [localStorageToken, setLocalStorageToken] = useState()

    // Função responsável por Trocar o Tema
    function changeLocalStorageToken(localStorageTokenReceived) {

        localStorage.setItem('token', localStorageTokenReceived)
        setLocalStorageToken(localStorageTokenReceived)

    }

    return(

        // Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <LocalStorageTokenContext.Provider value={{localStorageToken, changeLocalStorageToken}}>
            { props.children }
        </LocalStorageTokenContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useLocalStorageToken() {

    const context = useContext(LocalStorageTokenContext)

    return context

}