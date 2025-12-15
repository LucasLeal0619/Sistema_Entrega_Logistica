const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

//http://localhost:3000/auth/register - > Criar ADMIN e Motorista
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);


module.exports = router;