var express = require('express');
var riegoRouter = express.Router();
var pool = require('../../mysql');

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
    let fecha = req.body._fecha.replace('Z', '')
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