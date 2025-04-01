const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  img: {
    type: String
  },
  nombre: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  habilidad: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', itemSchema);