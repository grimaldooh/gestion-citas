import CalendarComponent from "../../components/CalendarComponent"; // Importa el componente CalendarComponent
import  citasData from '../../data/citas.json'; // Importa los datos del archivo JSON
import { useState, useEffect ,useContext} from 'react'; // Importa los hooks de estado y efecto
import UserIdContext from "../../context/userContext";



const CalendarioScreen = ({ citas, setCitasCalendario }) => {

  const { userId } = useContext(UserIdContext);

  

  return (
    
      <CalendarComponent citas={citas} setCitasPendientes={setCitasCalendario}/>

 
  );
};

export default CalendarioScreen;

