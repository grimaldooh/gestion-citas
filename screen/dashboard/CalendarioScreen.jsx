import CalendarComponent from "../../components/CalendarComponent"; // Importa el componente CalendarComponent
import  citasData from '../../data/citas.json'; // Importa los datos del archivo JSON
import { useState, useEffect ,useContext} from 'react'; // Importa los hooks de estado y efecto
import UserIdContext from "../../context/userContext";



const CalendarioScreen = ({ citas, setCitasCalendario }) => {

  const { userId } = useContext(UserIdContext);
  const citasActivas = citas.filter(cita => cita.status === 2);

  

  return (
    
      <CalendarComponent citas={citasActivas} setCitasPendientes={setCitasCalendario}/>

 
  );
};

export default CalendarioScreen;

