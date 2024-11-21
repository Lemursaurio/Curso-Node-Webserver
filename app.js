const express = require('express')
const hbs = require('hbs')
require('dotenv').config()
const app = express()

const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))

// En express por defecto se busca un index.html como inicial
// app.get('/', function (req, res) {
//     res.send('Home Page')
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
})

app.get('/salidas', (req, res) => {
    res.render('salidas', {
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
})

// app.get('/hola-mundo', function (req, res) {
//     res.send('Hola Mundo en su respectiva ruta')
// })

// app.get('/generic', function (req, res) {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/element', function (req, res) {
//     res.sendFile(__dirname + '/public/element.html')
// })

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})
