/**
 * Declaración de rutas de la API
 */
const router = require('express').Router();

router.use('/ventas', require('./ventas'));
// router.use( '/foo', require('./foo'));
// ...

module.exports = router