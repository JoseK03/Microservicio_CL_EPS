const express = require('express');
const app = express();
const routerBase = require('./routes/routes.js');

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use('/eps',routerBase);

app.listen(port,()=>{
    console.log('Servidor inicializado');
});

