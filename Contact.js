//We destructure schema here
const {Schema, model} = require('mongoose')
 
const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    
    email:{
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 15
    }

})

//create a model
const Contact = model('Contact',contactSchema)

// for using it we have to export the model
module.exports = Contact