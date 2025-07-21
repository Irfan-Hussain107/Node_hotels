const mongoose = require('mongoose')

const menuItemSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        requird: true
    },
    taste: {
        type: String,
        enum: ["sweet", "spicy", "sour"],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const menuItem= mongoose.model('menuItem', menuItemSchema)
module.exports= menuItem;