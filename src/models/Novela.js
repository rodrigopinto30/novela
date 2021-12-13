const {Schema, model} = require('mongoose');

const novelaSchema = new Schema({
    author:{
        type: String,
        require: true,
        trin: true
    },
    title:{
        type: String,
        require: true,
        trin: true
    },
    section:{
        type: String,
        require: true,
        trin: true
    },
    description:{
        type: String,
        require: true,
        trin: true
    },
    content:{
        type: String,
        require: true,
        trin: true
    }
});

module.exports = model('Novela', novelaSchema);