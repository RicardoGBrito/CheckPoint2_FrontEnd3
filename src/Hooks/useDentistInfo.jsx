import { useState } from "react"
import { createContext, useContext } from "react"

// Ciração do Contexto
const DentistContext = createContext()

// Criação do Provedor para o Contexto
export function DentistInfoProvider(props) {

    const [dentistInfo, setDentistInfo] = useState(() => {
    
        fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
          response => {
            response.json().then(
              data => {
                setDentistInfo(data)
              }
            )
          }
        )
    })

    // Função responsável por Trocar o Tema
    // function changeDentistInfo(dentistInfoReceived) {

    //     setDentistInfo(dentistInfoReceived)

    // }

    return(

        // Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <DentistContext.Provider value={{dentistInfo}}>
            { props.children }
        </DentistContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useDentistInfo() {

    const context = useContext(DentistContext)

    return context

}