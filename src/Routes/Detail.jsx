import DetailCard from "../Components/DetailCard";
import { useEffect, useState } from "react";

const Detail = () => {

  //solução provisória para o problema proposto no DetailCard.jsx
  const [detail, setDetail] = useState([])

  useEffect(() => {
    fetch('https://dhodonto.ctdprojetos.com.br/dentista').then(
      response => {
        response.json().then(
          data => {
            setDetail(data);
          }
        )
      }
    )
  }, [])
  
  
  return (
    <>
    {
      detail.map(
        detail => {
          return (
            <DetailCard 
              containerData={detail}
            />
          )
        }
      )
    }
      
    </>
  )
}

export default Detail