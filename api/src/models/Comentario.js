const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
    clienteId: String,
    musicaId: String,
    texto: String
});

module.exports = mongoose.model('Comentario', ComentarioSchema);