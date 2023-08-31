import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import hbs from "hbs";
import 'dotenv/config'

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const puerto = process.env.PORT;
//Middleware
//Servir contenido estático

//handlebars

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use( express.static('public/templated-roadtrip') )


app.get('/', function (req, res) {
    res.render('home', {
        nombre: `Jairo Arevalo`,
        titulo: `Curso node`
    });
})

app.get('/index', function (req, res) {
    res.render('home', {
        nombre: `Jairo Arevalo`,
        titulo: `Curso node`
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: `Jairo Arevalo`,
        titulo: `Curso node`
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: `Jairo Arevalo`,
        titulo: `Curso node`
    });
})




app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})
app.listen(puerto)