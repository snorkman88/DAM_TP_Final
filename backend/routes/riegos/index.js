var express = require('express');
var riegoRouter = express.Router();
var pool = require('../../mysql');

//Espera por parámetro un id de electrovalvula y devuelve todas sus mediciones
riegoRouter.get('/:electrovalvulaId/todas', function(req, res) {
    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha desc', [req.params.electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


riegoRouter.post('/:electrovalvulaId', function(req, res) {
    let apertura = req.body._apertura
    let fecha = req.body._fecha.replace('Z', '')//me toco sacar la Z porque MariaDB tiro error al querer insertar
    let electrovalvulaId = req.body._electrovalvulaId

    
    pool.query(`INSERT INTO Log_Riegos (apertura, fecha, electrovalvulaId) VALUES (?, ?, ?)`, [apertura, fecha, electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            console.log(err)
            return;
        }
        res.send(result);
    });
});

//Espera por parámetro un id de electrovalvula y devuelve su estado actual
riegoRouter.get('/:electrovalvulaId/actual', function(req, res) {
    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha desc', [req.params.electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result[0]);
    });
});
module.exports = riegoRouter;