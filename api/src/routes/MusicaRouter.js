const express = require('express');
const router = express.Router();

const MusicaController = require('../controllers/MusicaController');

router.post('/', MusicaController.create);

router.get('/', MusicaController.getAll);

router.get('/:id', MusicaController.getById);

router.put('/:id', MusicaController.update);

router.delete('/:id', MusicaController.delete);

module.exports = router;