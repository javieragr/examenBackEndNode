const { Router } = require('express');
const { respuesta, addDNA } = require('../controllers/validators');
const { check } = require('express-validator');
const { validarcampos } = require('../middlewares/validad-campos');


const router = Router();

router.post('/new', [check('name', 'El nombre es obligatorio').not().notEmpty(), validarcampos], respuesta)
router.post('/addDNA', [], addDNA)

module.exports = router;