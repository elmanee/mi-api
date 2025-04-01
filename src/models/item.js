const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  img: {
    type: String, 
  },
  nombre: {
    type: String,
    required: true,
    unique: true 
  },
  color: {
    type: String, 
    required: true
  },
  habilidad: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
