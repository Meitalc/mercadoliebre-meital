const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('🚀 Servidor escuchando en el puerto 3000');
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/register', function(req, res){

    res.sendFile(path.join(__dirname + '/views/register.html'));
});

app.get('/login', function(req, res){

    res.sendFile(path.join(__dirname + '/views/login.html'));
});