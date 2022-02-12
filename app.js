var http = require('http')
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');

require('dotenv').config();

const app = express();
app.use(express.json())
app.use(express.static('public'))
app.use(cors());
dbConnection();




app.use('/api/validators', require('./routes/validators'));

//Get
app.get('/huhu', (req, res) => {

    res.status(404).json({
        ok: true,
        msg: 'todo bien',
        uid: 1234

    })
})


    app.listen(process.env.PORT ,()=>{
        console.log('servidor corriendo ene le puerto :',process.env.PORT);
    })  //escucha peticiones desde este puerto
    

