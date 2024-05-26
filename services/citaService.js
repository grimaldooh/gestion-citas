// api.js
export const fetchCitas = async (userId) => {
    const response = await fetch(
      `https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/GetAllAppointments/3`
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
    const response = await fetch("https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: appointmentJson,
    });
  
    const data = await response.json();
    const newAppointmentResponse = await fetch(`https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/read/${data.id}`);
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
    const updatedCitaJson = JSON.stringify({
      startDate: cita.date,
      startTime: cita.time.slice(0, 8), // Tomar solo las primeras 8 caracteres de la hora para asegurar el formato correcto
      durationMinutes: cita.duration,
      status: cita.status,
    });
  
    try {
      const response = await fetch(
        `https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/update/${cita.id}`,
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
  
  // api.js
export const deleteAppointment = async (citaId) => {
  try {
    const response = await fetch(
      `https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/delete/${citaId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const rejectAppointment = async (citaId) => {
  try {
    const response = await fetch(
      `https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/delete/${citaId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const acceptAppointment = async (cita) => {
  const acceptedCitaJson = JSON.stringify({
    id: cita.id,
    status: cita.status,
  });

  try {
    const response = await fetch(
      `https://a4b3-187-190-138-154.ngrok-free.app/api/Appointment/update/${cita.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: acceptedCitaJson,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};