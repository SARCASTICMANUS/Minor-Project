const {model,Schema} = require('../connection');

const myschema = new Schema({

    name:String,           
    email:String,
    owner:String,
    createdAt:Date,
    
});

module.exports = model('subscriber',myschema);
