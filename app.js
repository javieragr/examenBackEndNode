var http = require('http')
const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json())
app.use(express.static('public'))
app.use(cors());

app.use('/api/validators', require('./routes/validators'));

//Get
app.get('/huhu', (req, res) => {

    res.status(404).json({
        ok: true,
        msg: 'todo bien',
        uid: 1234

    })
})

app.listen(4000, () => {
        console.log(`servidor corriendo en el puerto: 4000`);
    }) //escucha peticiones desde este puerto