const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/api/items', itemController.getItems);
router.post('/', itemController.createItem);

module.exports = router;