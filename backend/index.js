const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON

// Ruta de prueba
app.get('/api', (req, res) => {
    res.json({ mensaje: '¡Servidor de PCStore funcionando!' });
});

// Puerto y arranque
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});nr