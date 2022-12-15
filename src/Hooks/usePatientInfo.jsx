import { useState } from "react"
import { createContext, useContext } from "react"

const PatientContext = createContext()

export function PatientInfoProvider(props) {

    const [patientInfo, setPatientInfo] = useState(() => {
    
        fetch('https://dhodonto.ctdprojetos.com.br/paciente').then(
          response => {
            response.json().then(
              data => {
                setPatientInfo(data.body)
              }
            )
          }
        )
    })

    return(

        <PatientContext.Provider value={{patientInfo}}>
            { props.children }
        </PatientContext.Provider>

    )

}

export function usePatientInfo() {

    const context = useContext(PatientContext)

    return context

}