const {Schema,model} = require('mongoose');

const DNAsSchema=Schema({
    DNA:{
        type:String,
        required:true,
        unique:true
    },
    Mutation:{
        type:Boolean,
        required:true

    }
})

module.exports=model('DNAs',DNAsSchema)