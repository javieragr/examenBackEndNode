const { response } = require('express');
const { hasMutation } = require('../services/iDNAService');

ADN = require('../models/DNA');



const addDNA = async(req, resp = response) => {
    try {

        let adn=[];
       // req.body.dna.map(function(x) { return x.toUpperCase(); });
       req.body.dna.forEach(element => {
            element=element.toUpperCase()
            adn.push(element);
        });

        let plainDNA=adn.join().replace(/,/g, '');
        let estaMutado =false;
        console.log('esta mutado: ',estaMutado);
   //     buscamos que no exista el adn en la bd
       const adnEnBD= await ADN.findOne({DNA:plainDNA});
        if(adnEnBD){
            return resp.status(adnEnBD.Mutation?200:403).json({
                ok:true,
                msg:'El adn ya existe'
            });
        }else{

//            const estaMutado =checkMutation(dna);
            estaMutado=hasMutation(adn);
            const dbDNA = new ADN({DNA:plainDNA,Mutation:estaMutado})
            await dbDNA.save();

            //console.log(`la secuncia es plano: ${plainDNA}`);

        return resp.status(estaMutado?200:403).json({
            ok:true,
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

const stats = async(req,resp=response)=>{
        try {

            // let adns= await ADN.find({Mutation:true});
            let mutados= await ADN.count({Mutation:true});
            let noMutados= await ADN.count({Mutation:false});
            let adn={count_mutations:mutados,
                count_no_mutations:noMutados,
                ratio:(((mutados)*100)/(mutados+noMutados)/100).toFixed(2)
            }
            
            return resp.status(300).json({
                ok:true,
                msg:'Stats',
                adn:adn
            })
        } catch (error) {
            console.log(error);
            return resp.status(500).json({
            ok: false,
            msg: 'Hable con el admin'

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
    addDNA,
    stats

}