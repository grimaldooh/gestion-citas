import { View } from "react-native";
import CalendarComponent from "../../components/CalendarComponent"; // Importa el componente CalendarComponent
import  citasData from '../../data/citas.json'; // Importa los datos del archivo JSON

const CalendarioScreen = () => {
  

  return (
    
      <CalendarComponent citas={citasData} />

 
  );
};

export default CalendarioScreen;
