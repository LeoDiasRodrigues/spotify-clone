const express = require('express');
const router = express.Router();

const ComentarioController = require('../controllers/ComentarioController');

router.post('/', ComentarioController.create);
router.get('/', ComentarioController.getAll);
router.get('/:id', ComentarioController.getById);
router.put('/:id', ComentarioController.update);
router.delete('/:id', ComentarioController.delete);

module.exports = router;