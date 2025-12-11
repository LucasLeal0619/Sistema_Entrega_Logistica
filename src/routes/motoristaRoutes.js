const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const { authMiddleware } = require('../middlewares/authMiddleware');
const driverController = require('../controllers/driverController');
const validator = require('../middlewares/validator');

// validacoes
const createDriverValidation = [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('phone').notEmpty().withMessage('Telefone é obrigatório'),
  body('cpf').notEmpty().withMessage('CPF é obrigatório'),
  body('cnh').notEmpty().withMessage('CNH é obrigatória'),
  body('vehicle_type').isIn(['moto', 'carro', 'van']).withMessage('Tipo de veículo inválido'),
  body('vehicle_plate').notEmpty().withMessage('Placa do veículo é obrigatória'),
  body('employment_type').isIn(['proprio', 'terceirizado']).withMessage('Tipo de vínculo inválido')
];

const updateLocationValidation = [
  param('id').isInt().withMessage('ID inválido'),
  body('latitude').isFloat().withMessage('Latitude inválida'),
  body('longitude').isFloat().withMessage('Longitude inválida')
];

const updateStatusValidation = [
  param('id').isInt().withMessage('ID inválido'),
  body('status').isIn(['disponivel', 'em_entrega', 'inativo']).withMessage('Status inválido')
];

const rateDriverValidation = [
  param('id').isInt().withMessage('ID inválido'),
  body('delivery_id').isInt().withMessage('ID da entrega inválido'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Avaliação deve ser entre 1 e 5'),
  body('comment').optional().isString()
];

// tudo requer autenticação
router.use(authMiddleware);

router.post('/', createDriverValidation, validator, driverController.create);
router.get('/', driverController.list);
router.get('/:id', driverController.getById);
router.get('/:id/performance', driverController.getPerformance);
router.get('/:id/deliveries', driverController.getActiveDeliveries);

router.patch(
  '/:id/location',
  updateLocationValidation,
  validator,
  driverController.updateLocation
);

router.patch(
  '/:id/status',
  updateStatusValidation,
  validator,
  driverController.updateStatus
);

router.post(
  '/:id/rate',
  rateDriverValidation,
  validator,
  driverController.rate
);

module.exports = router;




/*const express = require('express');
const router = express.Router();
const MotoristaController = require('../controllers/motoristaController');

// Define as rotas:
// POST http://localhost:3000/motoristas -> Cria
router.post('/', MotoristaController.store);

// GET http://localhost:3000/motoristas -> Lista
router.get('/', MotoristaController.index);

module.exports = router;
*/