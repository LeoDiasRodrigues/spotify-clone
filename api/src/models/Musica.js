const mongoose = require('mongoose');

const Musica = mongoose.model('Musica', {
    titulo: String,
    artista: String,
    genero: String,
    duracao: String,
    ano: Number,
    letra: String,
    capa: String
});

module.exports = Musica;