var mysql = require('mysql');
var configMysql = {
    connectionLimit: 10,
    //host: "mysql-server"
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'DAM',
    insecureAuth: true
}
var pool = mysql.createPool(configMysql);

console.error('ESPERANDO.');
seconds=1;
var waitTill = new Date(new Date().getTime() + seconds * 1000);
while(waitTill > new Date()){}

console.error('TERMINO ESPERA.');

pool.getConnection((err, connection) => {
    if (err) {
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('La conexion a la DB se cerró.');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.error('La base de datos tiene muchas conexiones');
                break;
            case 'ECONNREFUSED':
                console.error('La conexion fue rechazada');
            default:
                console.error('No se conecta a MySQL')
        }
        if (connection) {
            connection.release();
        }
        return;
    }
});
module.exports = pool;