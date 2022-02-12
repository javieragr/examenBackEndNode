const { Router } = require('express');
const { respuesta, addDNA } = require('../controllers/validators');
const { check } = require('express-validator');
const { validarcampos } = require('../middlewares/validad-campos');
const verifyLetters = require('../middlewares/valida-mutations');


const router = Router();

router.post('/new', [check('name', 'El nombre es obligatorio').not().notEmpty()], respuesta)
router.post('/mutation', verifyLetters,addDNA)
//router.post('/addDNA',[], addDNA)

module.exports = router;