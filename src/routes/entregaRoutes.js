const express = require('express');
const router = express.Router();
const EntregaController = require('../controllers/entregaController');

router.post('/', EntregaController.store);
router.get('/', EntregaController.index);

module.exports = router;