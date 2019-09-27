const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

// MiddleWare para Vue Router
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000)
app.listen(app.get('puerto'), function(){
    console.log('Escuchando en el puerto 3000')
})