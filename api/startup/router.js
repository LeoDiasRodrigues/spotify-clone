const express = require('express');

const musicaRouter = require('../src/routes/MusicaRouter');
const clienteRouter = require('../src/routes/ClienteRouter');
const playlistRouter = require('../src/routes/PlaylistRouter');
const comentarioRouter = require('../src/routes/ComentarioRouter');

module.exports = (app) => {
    app.use(express.json());

    app.use('/musica', musicaRouter);
    app.use('/cliente', clienteRouter);
    app.use('/playlist', playlistRouter);
    app.use('/comentario', comentarioRouter);
};