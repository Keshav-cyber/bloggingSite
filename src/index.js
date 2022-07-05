const express= require('express')
const bodyparser=require('body-parser')
const route=require('./route/route')
const mongoose=require('mongoose')


const app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

//====================================================Data-Base Connection=================================================================


mongoose.connect("mongodb+srv://Keshav-cyber:7LizqrsG6tL39fuT@cluster0.ohm0bak.mongodb.net/blogsite?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


//========================================================================================================================================


app.use('/', route)  


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});