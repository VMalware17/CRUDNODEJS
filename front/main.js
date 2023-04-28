//consumo de una API rest creada en NODE JS

const urlApi = "http://localhost:3300/api/usuarios"

fetch(urlApi)
    .then((res)=> {return res.json()})
    .then((res)=> {
        console.log(res)
        for (let index = 0; index < res.length; index++) {
            document.write(res[index].id + res[index].nombre + res[index].phone)
        }
    })