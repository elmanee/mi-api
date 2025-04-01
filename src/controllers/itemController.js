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
    img: req.body.img,
    nombre: req.body.nombre,
    color: req.body.color,
    habilidad: req.body.habilidad
  });

  try {
    const nuevoItem = await item.save();
    res.status(201).json(nuevoItem);
    console.log("Nuevo Item: " + JSON.stringify(nuevoItem));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};