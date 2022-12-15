import { useEffect } from "react";
import styles from "./ScheduleForm.module.css";
import { useTheme } from "./../Hooks/useTheme"
import { useDentistInfo } from "./../Hooks/useDentistInfo";
import { usePatientInfo } from "./../Hooks/usePatientInfo";
import { useParams } from "react-router-dom";

const ScheduleForm = () => {

  const { dentistInfo } = useDentistInfo()
  const { patientInfo } = usePatientInfo()
  const { theme } = useTheme()
  const { id } = useParams()

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes

    /* fetch('http://dhodonto.ctdprojetos.com.br/dentista').then((response) => response.json()).then(data => console.log(data.body)) */
    /* fetch('http://dhodonto.ctdprojetos.com.br/paciente').then((response) => response.json()).then(data => console.log(data)) */
  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={theme === 'dark' ? `text-center container ${styles.cardDark}` : `text-center container`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select defaultValue={id} className="form-select" name="dentist" id="dentist">
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                {
                  dentistInfo &&
                  dentistInfo.map(dentista => {
                    return (
                      <option key={dentista.matricula} value={dentista.matricula}>
                      {`${dentista.nome} ${dentista.sobrenome}`}
                    </option>
                    )
                  }
                  )
                }
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient">
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {patientInfo &&
                  patientInfo.map(paciente => {
                    return (
                      <option key={paciente.matricula} value={paciente.matricula}>
                  {`${paciente.nome} ${paciente.sobrenome}`}
                      </option>
                    )
                  }
                  )}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
