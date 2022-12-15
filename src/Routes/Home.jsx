import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useDentistInfo } from "./../Hooks/useDentistInfo"

const Home = () => {

  //const [cardDados, setCardDados] = useState([])
  const { dentistInfo, changeDentistInfo } = useDentistInfo()

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />

    fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            changeDentistInfo(data)
          }
        )
      }
    )

  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {/* <Card /> */}
        {
          dentistInfo.map(container => {
            return (
              <Card
                key={container.matricula}
                containerData={container}
              />
            )
          }
          )
        }
      </div>
    </>
  );
};

export default Home;
