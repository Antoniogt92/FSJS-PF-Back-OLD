const mongoose = require("mongoose");

const peliculaSchema = mongoose.Schema({
    "_id" : mongoose.Schema.Types.ObjectId,
    "title"          : String,
    "year"           : Number,
    "runtime"        : String,
    "country"        : String,
    "director"       : String,
    "screenwriter"   : String,
    "cinematography" : String,
    "music"          : String,
    "cast"           : String,
    "genre"          : String,
    "synopsis"       : String,
    "poster"         : String
});

const peliculaModel = mongoose.model("Pelicula", peliculaSchema); //necesitas una colección "peliculas"

module.exports = peliculaModel;

//eof
