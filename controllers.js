

const Contact = require('./Contact')




exports.getAllContact = (request,response) => {

}


exports.getSingleContact = (request,response) => {
    
}


exports.createContact = (request,response) => {

 
    let {name, phone, email} = request.body
    let contact = new  Contact({
        name,
        email,
        phone
    })
    
    console.log(contact)
    response.json({
        message: 'Something'
    })

    contact.save()
    .then(c => {
        response.json(c)

    })
    .catch(e=>{
        console.log(e)
        response.json({
            message: 'error occured '
        })
    })



 }
 



   
 

exports.updateContact = (request,response) => {
    
}


exports.deleteContact = (request,response) => {
    
}

