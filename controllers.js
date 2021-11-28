

const Contact = require('./Contact')




exports.getAllContact = (request,response) => {

}


exports.getSingleContact = (request,response) => {
    
}


exports.createContact = (request,response) => {

 
    let {name, phone, email} = request.body

    //create contact object or document 
    let contact = new  Contact({
        name,
        email,
        phone
    })

    console.log(contact)
    response.json({
        message: 'Something'
    })


    
/* 
    // for saving the data to the DB we need save fun
    contact.save()

    //save fun will return a promise 
    .then(c => {
        response.json(c)
    })

    .catch(e=>{
        console.log(e)
        response.json({
            message: 'error occured '
        })
    })

 */
 }
 



   
 

exports.updateContact = (request,response) => {
    
}


exports.deleteContact = (request,response) => {
    
}

