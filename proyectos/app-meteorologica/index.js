const express = require('express');
const axios = require('axios');
// ... (código anterior)

const app = express();
const PORT = 3000;

const apiKey = '76167cad71c92c7d6ad5bd693521a645'; // Reemplaza con tu clave de API del clima

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta para obtener la información del clima
app.get('/weather', (req, res) => {
  const ciudad = req.query.ciudad || 'Medellin'; // Puedes cambiar la ciudad predeterminada

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

  axios.get(apiUrl)
    .then(response => {
      const clima = response.data.weather[0].description;
      res.send({ clima });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Hubo un error al obtener el clima.');
    });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
