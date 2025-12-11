const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const validator = require('../middlewares/validator');

// validacoes
const registerValidation = [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
  body('role').optional().isIn(['admin', 'operator']).withMessage('Role inválido')
];

const loginValidation = [
  body('email').isEmail().withMessage('Email inválido'),
  body('password').notEmpty().withMessage('Senha é obrigatória')
];

// rotas piblicas
router.post('/register', registerValidation, validator, authController.register);
router.post('/login', loginValidation, validator, authController.login);

// nao publico
router.get('/me', authMiddleware, authController.me);

module.exports = router;