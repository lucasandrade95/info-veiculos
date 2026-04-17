const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculo.controller');

router.get('/', veiculoController.get);
router.post('/', veiculoController.post);
router.put('/:id', veiculoController.put);
router.delete('/:id', veiculoController.delete);

module.exports = router;
