const Item = require('../models/item');

// Obtener todos los items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo item
exports.createItem = async (req, res) => {
  const item = new Item({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  });

  try {
    const nuevoItem = await item.save();
    res.status(201).json(nuevoItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};