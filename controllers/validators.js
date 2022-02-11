const { response } = require('express');

ADN = require('../models/DNA');



const addDNA = async(req, resp = response) => {
    try {

        let {dna }= req.body.dna;
        let plainDNA=req.body.dna.join().replace(/,/g, '');
   //     buscamos que no exista el adn en la bd
       const adnEnBD= await ADN.findOne({DNA:plainDNA});
        if(adnEnBD){
            return resp.status(400).json({
                ok:false,
                msg:'El adn ya existe'
            });
        }else{
            const dbDNA = new ADN({DNA:plainDNA,Mutation:false})
            await dbDNA.save();

            console.log(`la secuncia es plano: ${plainDNA}`);

        return resp.status(400).json({
            ok: false,
            msg: 'el adn se guardo correctamente',
            dna:dbDNA
        });
       }
        

       
        

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'Falla al guardar el adn'

        })
    }


}
const respuesta = async(req, resp = response) => {
    //  const errors=validationResult(req)
    try {
        console.log(req.body.dna)
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
module.exports = {
    respuesta,
    addDNA

}