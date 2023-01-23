//Definimos el objeto o esquema del modelo para crear-borrar los articulos.

const { Schema, model } = require("mongoose");

const ArticuloSchema = Schema({
    //Definir datos que vamos a tener en cada articulo
    titulo: {
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        default: "default.png"
    }

});

//Nombre modelo "Articulo" /3° parametro es de la BD
module.exports = model("Articulo", ArticuloSchema, "articulos");
//mongoose : la colección se llama articulos (articulos con minus y plural)