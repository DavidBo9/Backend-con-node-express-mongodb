const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req,res) => {
    res.send('¡Servidor funcionando correctamente!');
})

const userRoute = require('./routes/user.route');

app.use('/api/users', userRoute);

mongoose.connect('')
.then(() => {
    console.log('Conexion a la base de datos exitosa');
    app.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
    });
})
.catch(err => {
    console.error('Error al conectar a la base de datos:', err);
});