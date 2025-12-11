const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const driverRoutes = require('./driverRoutes');
const clientRoutes = require('./clientRoutes');
const deliveryRoutes = require('./deliveryRoutes');
const routeRoutes = require('./routeRoutes');

router.get('/', (req, res) => {
  res.json({
    message: 'API de Gestão de Logística',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      drivers: '/api/drivers',
      clients: '/api/clients',
      deliveries: '/api/deliveries',
      routes: '/api/routes'
    }
  });
});

router.use('/auth', authRoutes);
router.use('/drivers', driverRoutes);
router.use('/clients', clientRoutes);
router.use('/deliveries', deliveryRoutes);
router.use('/routes', routeRoutes);

module.exports = router;