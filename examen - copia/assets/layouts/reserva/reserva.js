function hacerReserva() {
    var nombre = document.getElementById('name').value;
    var fechaInicio = document.getElementById('startDate').value;
    var fechaFin = document.getElementById('endDate').value;
  
    var fechaInicioObj = new Date(fechaInicio);
    var fechaFinObj = new Date(fechaFin);
  
    
    var diffTime = Math.abs(fechaFinObj - fechaInicioObj);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (nombre && fechaInicio && fechaFin) {
      var mensaje = `Hola ${nombre}, has reservado desde ${fechaInicioObj.toLocaleDateString()} hasta ${fechaFinObj.toLocaleDateString()} (${diffDays} días). ¡Disfruta tu estancia!`;
      alert(mensaje);
    } else {
      alert('Por favor, completa todos los campos de reserva.');
    }
  }
  