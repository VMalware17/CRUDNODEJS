//Modulo que resuelve las rutas de la API rest
// ARQUITECTURA RESTFUL
//Recordar: la API rest trabaja con los metodos HTTP
//GET, POST, PUT, DELETE, PATCH,....
//crea los endpoint para cada metodo

//paquetes requeridos

const express = require('express');
const cors = require('cors'); //para evitar restricciones entre llamadas de sitios
const ruta = express.Router(); //trae el metodo router de express para hacer los endpoint api/clientes
const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas del CORS

//middleware requeridos
//middleware: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas

ruta.use(express.json()) //serializa la data en JSON
ruta.use(cors(
    {
        origin: url_permitida
    }
)) //permite a acceso de otras direcciones IP distintas a mi servicio

const conex = require('./bdatos');

//construimos los endpoints
//listar todos usando el GET

ruta.get("/api/usuarios", (req,res) => {

    conex.query("SELECT * FROM usuarios",(error,respuesta) => {
            if(error)
            {
                /*throw error;*/
                console.log(`hay un error:${error}`)
            }
            else
            {
                res.send(respuesta)
            }
    })
})

//.....................................//
//Verbo post insertar
ruta.post('/api/usuarios',(req,res) =>{
let data= {
    nombre: req.body.nombre,
    Apellido: req.body.Apellido,
    telefono: req.body.telefono
}
conex.query("INSERT INTO usuarios SET ?",data,(error,respuesta) => {
    if(error){
        console.log(error)
    }
    else
    {
        res.status(201).send(respuesta)
    }
});

})

//editar verbo put

ruta.put('/api/usuarios/:id',(req,res) => {
    let id = req.params.id;
    let datos = {
        nombre: req.body.nombre,
        Apellido: req.body.Apellido,
        telefono: req.body.telefono
    };
    conex.query("UPDATE usuarios SET ? where id = ?", [datos,id]),(error,respuesta) => {
        if(error) {
            console.log(error);
        }
        else 
        {
            res.status(201)
        }
        
    }


})

//editar verbo put

ruta.delete('/api/usuarios/:id',(req,res) => {
    let id = req.params.id;
    conex.query("DELETE FROM usuarios where id = ?", id),(error,respuesta) => {
        if(error) {
            console.log(error);
        }
        else 
        {
            res.status(201).send(respuesta)
        }
        
    }


})

module.exports = ruta