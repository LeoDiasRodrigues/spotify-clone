const express = require('express');
const router = express.Router();

const PlaylistController = require('../controllers/PlaylistController');

router.post('/', PlaylistController.create);

router.get('/', PlaylistController.getAll);

router.get('/cliente/:clienteId', PlaylistController.getByCliente);

router.get('/:id', PlaylistController.getById);

router.put('/:id', PlaylistController.update);

router.delete('/:id', PlaylistController.delete);

module.exports = router;