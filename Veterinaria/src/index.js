const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/config');
const {obtenerTurnos,crearTurno,actualizarTurno,eliminarTurno} = require('./controller/turnoController');

const app = express();
app.use(bodyParser.json());

connectDB();

// Rutas
app.get('/turnos', obtenerTurnos);
app.post('/turnos', crearTurno);
app.put('/turnos/:id', actualizarTurno);
app.delete('/turnos/:id', eliminarTurno);

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
