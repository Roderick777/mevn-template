// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');
// const axios = require('axios');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Rutas
app.get('/tracktec', async (req, res ) => {
  let ruta = 'https://mguiza961:Q02r3oP5@my.inthinc.com/service/api/vehicles'
  let peticion = await axios.get(ruta);
  res.json(peticion.data[0].vehicleID);
});

app.get('/', async (req, res ) => {

  res.send('Hola');
});

// MiddleWare para Vue Router
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000)
app.listen(app.get('puerto'), () => {
    console.log('Escuchando en el puerto 3000')
})