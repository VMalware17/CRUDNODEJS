// puerta de entrada de la aplicacion (entry-point), usamos el principio SRP 
// Single-Responsibility Principle

//instanciamos los modulos requeridos

const express = require('express');
const app = express() //creamos nuestra aplicacion llamando el metodo constructor de express
app.use('/',require('./modules/rutas')); //redirigimos al modulo de rutas donde se resolveran las rutas

app.listen('3300',()=>{

    console.log('Aplicacion Ejecutandose en : http://localhost:3300')
})