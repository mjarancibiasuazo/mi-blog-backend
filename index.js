const { conexion } = require("./database/conexion");
const express = require("express");
const cors = require("cors");

//Inicializar app
console.log("App de node arrancada");

//Conectar a la abase de datos
conexion();

//Crear servidor Node
const app = express();
const puerto = 3900;

//Configurar cors
app.use(cors());

//Convertir body en objeto js(parseamos los objetos)
app.use(express.json());//recibir datos con content-type app/json
app.use(express.urlencoded({extended:true}));//form.urlencoded


//RUTAS
const rutas_articulo = require("./rutas/articulo");

//Cargo las rutas con un prefijo (api) o solo con la barra /
app.use("/api", rutas_articulo);



//Crear rutas hardcodeadas (petición y respuesta)
app.get("/probando", (req, res) => {

    console.log("Se ha ejecutado el endpoint probando");

    return res.status(200).json([{
        curso: "Master en React",
        autor: "Victor Robles Web",
        url: "victorroblesweb.es/master-react"

    },
    {
        curso: "Master en React",
        autor: "Victor Robles Web",
        url: "victorroblesweb.es/master-react"
    },

    ]);

});

app.get("/", (req, res) => {
    return res.status(200).send(
        "<h1>Empezando a crear un api rest con node</h1>"
    );
});


//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});