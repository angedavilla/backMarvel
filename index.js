require('./config/conect');

const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.set('port', port);

app.use('/api', require('./routes'));

app.listen(app.get('port'), (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Servidor corriendo en el puerto: ' + port);
    }
});