const express= require('express')
const router= express.Router()
const menuserver= require('../models/menu')

router.get('/', async(req, res) => {
    try{
        const data= await menuserver.find();
        console.log("menu data fetched")
        res.status(200).json(data);        
    }
    catch(err){
        console.log(err+" error in the menu collection")
        res.status(500).json({error: "Internal server error"})
    }
})

router.post('/', async(req, res) => {
    try{
        const data= req.body;
        const newMenu= new menuserver(data);
        const savedMenu= newMenu.save();
        console.log("menu data fetched")
        res.status(200).json(savedMenu);
    }
    catch(err){
        console.log(err+ " error in the post menu collection")
        res.status(500).json({error: "Internal server error"})
    }
})

router.get('/:taste', async(req, res) => {
    try{
        const response= req.params.taste
        if(response == 'spicy'|| response == 'sour' || response == 'sweet'){
            const data= await menuserver.find({taste: response})
            console.log("taste data found")
            res.status(200).json(data);
        }
        else{
            console.log("Invalid data")
            res.status(404).json({error: "Invalid data"})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.put('/:id', async(req, res) => {
    try{
        const menuId= req.params.id
        const updatedMenu= req.body
        const response= await menuserver.findByIdAndUpdate(menuId, updatedMenu, {
            new: true,
            runValidators: true
        })
        if(!response){
            return res.status(404).json({error: "Menu ID not found"})
        }

        console.log("Data Updated")
        res.status(200).json(response)
    }
    catch(err){
        console.log("Updation failed")
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const menuId= req.params.id
        const response= await menuserver.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error: "Menu ID not found"})
        }
        console.log("Deleted Successfully")
        res.status(200).json({message: "deleted successfully"})
    }
    catch(err){
        console.log("Deletion failed")
        res.status(500).json({error: "Internal Server Error"})
    }
})

module.exports= router;