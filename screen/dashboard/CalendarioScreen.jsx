import { View } from "react-native";
import CalendarComponent from "../../components/Calendar";
import  citasData from '../../data/citas.json'; // Importa los datos del archivo JSON

const CalendarioScreen = () => {
  

  return (
    <View>
      <CalendarComponent citas={citasData}/>
    </View>
  );
};

export default CalendarioScreen;
