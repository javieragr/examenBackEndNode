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

//#region 

// var arr = [ ["A", "T", "C", "G"],
// ["A", "A", "A", "G"],
// ["A", "T", "A", "T"],
// ["A", "G", "G", "G"],
// ["A", "C", "T", "A"],
// ["A", "T", "C", "G"],
// ["A", "A", "A", "G"],
// ["A", "T", "A", "T"],
// ["T", "G", "G", "T"],
// ["T", "C", "T", "A"]
// ]
// var a= arr.join().replace(/,/g, '');


// console.log(a);

//#endregion






app.use('/api/validators', require('./routes/validators'));

//Get
app.get('/huhu', (req, res) => {

    res.status(404).json({
        ok: true,
        msg: 'todo bien',
        uid: 1234

    })
})

// app.listen(4000, () => {
//         console.log(`servidor corriendo en el puerto: 4000`);
//     }) 

    app.listen(process.env.PORT ,()=>{
        console.log(`servidor corriendo en el puerto: jaja`);
    })  //escucha peticiones desde este puerto
    
