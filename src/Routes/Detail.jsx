import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";
import { useDentistInfo } from "./../Hooks/useDentistInfo";

const Detail = () => {
  
  const { dentistInfo } = useDentistInfo()
  const { id } = useParams()

  return (
    <>
      {dentistInfo && <DetailCard 
        dentistInfoDetail={dentistInfo.find(dentista => dentista.matricula === id)}
      />}      
    </>
  )
}

export default Detail