const { response } = require('express');


const respuesta = async(req, resp = response) => {
    //  const errors=validationResult(req)
    try {
        console.log(req.body)
        return resp.status(400).json({
            ok: false,
            msg: 'EA PRRo'
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'Hable con el admin'

        })
    }

}
const addDNA = async(req, resp = response) => {
    try {

        let dna = req.body;
        console.log(`la secuncia es ${dna}`);

        return resp.status(400).json({
            ok: false,
            msg: 'cumple con los parametros',
            dna
        });

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'el DNA esta mutado'

        })
    }


}
module.exports = {
    respuesta,
    addDNA

}