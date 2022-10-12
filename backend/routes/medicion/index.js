var express = require('express');
var routerMedicion = express.Router();
var pool = require('../../mysql');

routerMedicion.get('/:idDispositivo', function(req, res) {
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result[0]);
    });
});

routerMedicion.get('/:idDispositivo/todas', function(req, res) {
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerMedicion.post('/agregar', function(req, res) {
    console.log(req.body)
    let fecha = req.body.fecha.replace('Z', '')
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [fecha, req.body.valor.toString(), req.body.idDispositivo.toString()], function(err, result, fields) {
        if (err) {
            console.log(err)
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerMedicion.get('/:idDispositivo/ultima', function(req, res) {
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha asc limit 1', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


module.exports = routerMedicion;