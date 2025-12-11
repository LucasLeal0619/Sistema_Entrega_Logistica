const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { authMiddleware } = require('../middlewares/authMiddleware');
const clientController = require('../controllers/clientController');
const validator = require('../middlewares/validator');

// validacoes
const createClientValidation = [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('phone').notEmpty().withMessage('Telefone é obrigatório'),
  body('type').isIn(['ecommerce', 'pharmacy', 'restaurant']).withMessage('Tipo inválido'),
  body('address').notEmpty().withMessage('Endereço é obrigatório')
];

router.use(authMiddleware);

router.post('/', createClientValidation, validator, clientController.create);
router.get('/', clientController.list);
router.get('/:id', clientController.getById);
router.get('/:id/deliveries', clientController.getDeliveries);
router.post('/:id/regenerate-key', clientController.regenerateApiKey);

module.exports = router;