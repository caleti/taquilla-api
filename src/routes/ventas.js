const express = require('express');
const TransaccionesServicio = require('transacciones');
const config = require('../config');

const router = express.Router();

/**
 * Endpoint de ejemplo para mostrar el uso del servicio de transacciones.
 */
router.post('/', function(req, res) {

    // ...
    // Obtención de los datos del pago con tarjeta.
    // ...
    const datosPago = {
        no_tarjeta: 1231231231,
        titular: 'John Doe',
        monto: 1000
    }


    // Solicitar el pago con tarjeta al banco.
    const transaccionesServicio = new TransaccionesServicio(config.CUENTA_BANCO);
    
    transaccionesServicio.solicitar(datosPago.no_tarjeta, datosPago.titular, datosPago.monto)
        .then((datosTransferencia) => {

            // ...
            // Lógica para crear una venta nueva
            // ...

            res.json({
                success: true,
                data: datosTransferencia.data
            });

        })
        .catch((e) => 

            res.status(500).json({
                success: false,
                message: 'Hubo un error al intentar realizar la venta.'
            })
            
        );
})

module.exports = router