const express= require('express')
const router= express.Router();
const person= require('../models/person')

router.post('/', async(req, res) => {
    try{
        const data= req.body
        const newPerson= new person(data);
        const savedPerson= await newPerson.save();
        console.log('data saved')
        res.status(200).json(savedPerson);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"})
    }
})

router.get('/', async(req, res) => {
  try{
    const data= await person.find();
    console.log("data fetched");
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: "Internal Server Error"})
  }
})

router.get('/:workType', async(req, res) => {
    try{
        const workType= req.params.workType;
        if(workType== 'chef' || workType== 'waiter' || workType== 'manager'){
            const data= await person.find({work: workType})
            console.log("worktype data fetched")
            res.status(200).json(data);
        }
        else{
            console.log("worktype data is not present")
            res.status(404).json({error: "Invalid work type"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports= router;