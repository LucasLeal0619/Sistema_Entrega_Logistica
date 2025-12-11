const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const { authMiddleware } = require('../middlewares/authMiddleware');
const routeController = require('../controllers/routeController');
const validator = require('../middlewares/validator');

// validacoes
const createRouteValidation = [
  body('driver_id').isInt().withMessage('ID do motorista inválido'),
  body('delivery_ids').isArray({ min: 1 }).withMessage('Lista de entregas inválida'),
  body('route_date').optional().isISO8601().withMessage('Data inválida')
];

router.use(authMiddleware);

router.post('/', createRouteValidation, validator, routeController.create);
router.get('/', routeController.list);
router.get('/:id', routeController.getById);
router.patch('/:id/start', routeController.start);
router.patch('/:id/complete', routeController.complete);

module.exports = router;