const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

// Ruta para el archivo HTML
app.get('/', async (req, res) => {
  try {
    // Obtener los datos de la PokeAPI
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const pokemon = response.data;

    // Construir el contenido HTML
    const html = `
      <html>
      <head>
        <title>Pokémon</title>
      </head>
      <body>
        <h1>${pokemon.name}</h1>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
      </body>
      </html>
    `;

    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor web en funcionamiento en el puerto 3000');
});
