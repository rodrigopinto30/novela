const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
// Connect to DB
require('./dataBase');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//importar rutas
const indexRoutes = require('./routes/indexRoutes');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'))
})