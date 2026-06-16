const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: String,
    foto: String
});

module.exports = mongoose.model('Cliente', ClienteSchema);