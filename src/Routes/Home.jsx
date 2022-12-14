import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {

  const [cardDados, setCardDados] = useState([])

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />

    fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            setCardDados(data)
            console.log(data)
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
          cardDados.map(container => {
            return (
              <Card
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
