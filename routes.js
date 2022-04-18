const routes =  require('express').Router();
const conect =  require('./config/conect');

routes.get('/', (req, res) => {
    let sql = 'SELECT * FROM prueba.marvel'
    conect.query(sql, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: err
            });
        } else {
            res.json(rows).status(200);
        }
    })
});

routes.get('/:id', (req, res) => {
    const {id} = req.params;
    // let sql = `SELECT * FROM prueba.marvel WHERE id = ${id}`

     let sql = 'SELECT * FROM prueba.marvel WHERE id = ?;'
    conect.query(sql,[id], (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: 'Error al obtener los datos'
            });
        } else {
            res.json(rows).status(200);
        }
    })
});

routes.post('/', (req, res) => {
    const {nombre, ciudad, imagen, situacion, categoria, poderes} = req.body;

    let sql = `INSERT INTO prueba.marvel (nombre, ciudad, imagen, situacion, categoria, poderes) VALUES ('${nombre}', '${ciudad}', '${imagen}', '${situacion}', '${categoria}', '${poderes}')`;
    conect.query(sql, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json('Error al insertar los datos');
        } else {
            res.json(rows + ' Fila insertada').status(200);
        }
    })
});

routes.delete('/:id', (req, res) => {
    const {id} = req.params;

    let sql = `DELETE FROM prueba.marvel WHERE id = ${id}`
    conect.query(sql, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: 'Error al eliminar los datos'
            });
        } else {
            res.json(rows + ' Fila eliminada');
        }
    })
});

routes.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, ciudad} = req.body;

    let sql = `UPDATE prueba.marvel SET nombre = '${nombre}', ciudad = '${ciudad}' WHERE id = ${id}`
    conect.query(sql, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                message: 'Error al actualizar los datos'
            });
        } else {
            res.json(rows + ' Fila actualizada');
        }
    }) 
});
module.exports = routes;