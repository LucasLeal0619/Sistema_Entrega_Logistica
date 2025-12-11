const express = require('express');
const router = express.Router();
const MotoristaController = require('../controllers/motoristaController');

// Define as rotas:
// POST http://localhost:3000/motoristas -> Cria
router.post('/', MotoristaController.store);

// GET http://localhost:3000/motoristas -> Lista
router.get('/', MotoristaController.index);

module.exports = router;
