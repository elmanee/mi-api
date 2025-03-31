const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
// Rutas
app.use('/api/items', require('./routes/itemRoutes'));

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error de conexión a la BD:', err));