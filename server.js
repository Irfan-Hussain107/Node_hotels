// import express from 'express'
const express= require('express')
const app = express()
const db= require('./db')

const bodyParser= require('body-parser')


app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Welcome to our Restaurant')
// })

// app.get('/chowmein', (req, res) =>{
//     res.send("Here is your Chow Mein")
// })

// app.get('/burger', (req, res)=>{
//     res.send("Here is your Burger")
// })

// app.post('/person', (req, body) => {
//     const data= req.body
//     const newPerson= new person(data)
    // newPerson.name= data.name
    // newPerson.age= data.age
    // newPerson.mobile= data.mobile
    // newPerson.email= data.email
    // newPerson.address= data.address
    // newPerson.save((error, savedPerson) => {

    //   if(error){
    //     console.log("Error while receiving person data", error);
    //     res.status(500).json({error: 'Internal server error'})
    //   }else{
    //     console.log("person data saved successfully");
    //     res.status(200).json(savedperson)
    //   }
    // })

// })

const personRoutes= require('./router/personRoutes')
const menuRoutes= require('./router/menuRoutes')

app.use('/person', personRoutes);
app.use('/menu', menuRoutes)

app.listen(3000)