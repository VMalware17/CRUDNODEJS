// modulo que se encarga de conectar a la base de datos

const mysql = require('mysql'); //instanciamos el modulo MYSQL

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"


}); //creamos la conexion

//Nos conectamos a la BDatos

connection.connect(
    error => {
        if(error){
            //el throw es un mensaje el cual para el proceso de base de datos para mostrar el mensaje
            /*throw 'Existe un error en la cadena de conexion';*/
            console.log(`hay un error: ${error}`)
        }
        else
        {   
            console.log('Conexion exitosa')
        }

    });

module.exports=connection