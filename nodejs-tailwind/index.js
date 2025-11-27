//Comprobamos que el servidor funcione con este programa, al visitar localhost:3000
//debe aparecer una pagina indicando que funciona

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Funciona');
})

const server = app.listen(3000, () => {
    console.log(`La aplicacion está en el puerto ${server.address().port}`);
});