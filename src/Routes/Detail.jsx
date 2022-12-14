import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";
import { useDentistInfo } from "./../Hooks/useDentistInfo";

const Detail = () => {
  
  const { dentistInfo } = useDentistInfo()
  const { id } = useParams()
  const currentDentistInfo = dentistInfo.find(dentista => dentista.matricula === id)

  return (
    <>
      <DetailCard 
        dentistInfoDetail={currentDentistInfo}
      />      
    </>
  )
}

export default Detail