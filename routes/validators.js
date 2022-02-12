const { Router } = require('express');
const { respuesta, addDNA,stats } = require('../controllers/validators');
const { check } = require('express-validator');
const { validarcampos } = require('../middlewares/validad-campos');
const verifyLetters = require('../middlewares/valida-mutations');


const router = Router();


router.post('/mutation', verifyLetters,addDNA)
router.get('/stats',stats)


module.exports = router;