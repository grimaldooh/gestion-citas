import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { styles } from '../themes/theme';
import { LocaleConfig } from 'react-native-calendars';
import moment from 'moment-timezone'; // added for date formatting

const localeConfig = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: 'Hoy'
};

LocaleConfig.locales.es = localeConfig;
LocaleConfig.defaultLocale = 'es';

const CalendarComponent = ({ citas }) => {
  const today = moment().tz('America/Tijuana'); // use moment-timezone for date formatting
  const currentDate = today.format('YYYY-MM-DD');


  return (

      <Agenda
        initialDate={currentDate}
        markedDates={{
          '2024-05-16': { marked: true },
          '2024-05-17': { marked: true },
          '2024-05-18': { marked: true },
          '2021-05-19': { marked: true }
        }}
        pastScrollRange={5}
        theme={{
          
          calendarBackground: '#001D3D',
          textSectionTitleColor: '#FFD353',
          selectedDayBackgroundColor: '#ffd353',
          selectedDayTextColor: '#001D3D',
          todayTextColor: '#FFD353',
          dayTextColor: '#ffffff',
          textDisabledColor: '#8c8c8c',
          dotColor: '#ffd353',
          selectedDotColor: '#001D3D',
          monthTextColor: '#FFD353',
          textDayFontSize: 14,
          arrowColor: "#ffd353",
        }}
        style={{
          flex: 1,
          width: '100%',
          marginTop: 10,
          backgroundColor: '#001D3D',
        }}
      />
  );
};

export default CalendarComponent;