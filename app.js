
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes')


const app = express()




app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

/* 
let Schema = mongoose.Schema
let testSchema = new Schema({
    name: String
})

//create model
//name of the model is Test 
let Test = mongoose.model('Test',testSchema)

 */

app.use('./contacts', router)



app.get('/', (request,response) => {
/* 
    //crete a object
    let test = new Test({
        name: 'Asiful Bijoy'

        
    })
    

    test.save()
       .then(t=>{
        response.json(t)
    })
    .catch(e=>{
        console.log(e)
        //server error is 500 so that we use 500
        response.status(500).json({
            error: 'error occurred'
        })
        
    })

     */
})






const PORT= process.env.PORT || 8080

mongoose.connect(`mongodb+srv://ab101:ab101@cluster0.wi1os.mongodb.net/test`,{
    useNewUrlParser: true
}) // function call will return a promise
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on PORT ${PORT}`)
    })
})

.catch(e=>{
    console.log(e)
})



