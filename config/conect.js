const mySql = require('mysql');
const conect = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySql',
    port: '3306',
    database: 'prueba'
});

conect.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conexion correcta');
    }
});

module.exports = conect;