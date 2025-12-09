const express = require('express');
const router = express.Router();
const { body, param, query } = require('express-validator');
const { authMiddleware, apiKeyMiddleware } = require('../middlewares/authMiddleware');
const deliveryController = require('../controllers/deliveryController');
const validator = require('../middlewares/validator');

// validacoes
const createDeliveryValidation = [
  body('client_id').isInt().withMessage('ID do cliente inválido'),
  body('order_number').notEmpty().withMessage('Número do pedido é obrigatório'),
  body('delivery_address').notEmpty().withMessage('Endereço de entrega é obrigatório'),
  body('delivery_latitude').isFloat().withMessage('Latitude inválida'),
  body('delivery_longitude').isFloat().withMessage('Longitude inválida'),
  body('recipient_name').notEmpty().withMessage('Nome do destinatário é obrigatório'),
  body('recipient_phone').notEmpty().withMessage('Telefone do destinatário é obrigatório'),
  body('priority').optional().isIn(['baixa', 'normal', 'alta', 'urgente'])
];

const updateStatusValidation = [
  param('id').isInt().withMessage('ID inválido'),
  body('status').isIn([
    'pendente', 'atribuida', 'coletada', 'em_transito', 
    'entregue', 'cancelada', 'falhou'
  ]).withMessage('Status inválido')
];

const assignDriverValidation = [
  param('id').isInt().withMessage('ID inválido'),
  body('driver_id').isInt().withMessage('ID do motorista inválido')
];

// rotas publicas 
router.post(
  '/',
  apiKeyMiddleware,
  createDeliveryValidation,
  validator,
  deliveryController.create
);

router.get(
  '/track/:id',
  deliveryController.track
);

// rotas protegidas requerem autenticação
router.use(authMiddleware);

router.get('/', deliveryController.list);
router.get('/stats', deliveryController.getStats);
router.get('/:id', deliveryController.getById);

router.patch(
  '/:id/assign',
  assignDriverValidation,
  validator,
  deliveryController.assignDriver
);

router.patch(
  '/:id/status',
  updateStatusValidation,
  validator,
  deliveryController.updateStatus
);

module.exports = router;