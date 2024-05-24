// api.js
export const fetchCitas = async (userId) => {
    const response = await fetch(
      `https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/GetAllAppointments/3`
    );
    const data = await response.json();
    return data.map((cita) => ({
      id: cita.id,
      img: cita.userImage,
      name: cita.clientName,
      date: cita.startDate,
      time: cita.startTime,
      status: cita.status,
      duration: cita.durationMinutes,
      serviceProviderId: cita.serviceProviderId,
    }));
  };

  // api.js
export const crearCita = async (appointmentJson) => {
    const response = await fetch("https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: appointmentJson,
    });
  
    const data = await response.json();
    const newAppointmentResponse = await fetch(`https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/read/${data.id}`);
    const newAppointment = await newAppointmentResponse.json();
  
    return {
      id: newAppointment.id,
      img: newAppointment.userImage,
      name: newAppointment.clientName,
      date: newAppointment.startDate,
      time: newAppointment.startTime,
      status: newAppointment.status,
      duration: newAppointment.durationMinutes,
    };
  };

  export const updateAppointment = async (cita) => {

    if (cita.time === undefined) {
        console.error("Error: cita.time es undefined");
        return;
      }
      
    const updatedCitaJson = JSON.stringify({
      startDate: cita.date,
      startTime: cita.time.slice(0, 8), // Tomar solo las primeras 8 caracteres de la hora para asegurar el formato correcto
      durationMinutes: cita.duration,
      status: cita.status,
    });
  
    try {
      const response = await fetch(
        `https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/update/${cita.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: updatedCitaJson,
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export const deleteAppointment = async (cita) => {
    const canceledCitaJson = JSON.stringify({
      id: cita.id,
      status: 0,
    });
  
    try {
      const response = await fetch(
        `https://24a5-187-188-39-222.ngrok-free.app/api/Appointment/delete/${cita.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: canceledCitaJson, // Agrega esto
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };