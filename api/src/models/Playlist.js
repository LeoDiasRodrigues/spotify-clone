const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    clienteId: String,
    musicaId: String
});

module.exports = mongoose.model('Playlist', PlaylistSchema);