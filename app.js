const express = require('express');
const { registerPartials } = require('hbs');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Esteban Rodríguez',
    titulo: 'Curso de Node'
  });
});

app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'Esteban Rodríguez',
    titulo: 'Curso de Node'
  });
});

app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Esteban Rodríguez',
    titulo: 'Curso de Node'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Ejemplo de aplicación en puerto ${port}`)
  });