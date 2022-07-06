const mongoose = require("mongoose")

//Messages
const ItemSchema = mongoose.Schema({
    content : String,
    active : {
        type : Boolean,
        default : true
    },
    created_date : {
        type : Date,
        default : Date.now()
    }
})

//Messages Model
const Item = mongoose.model("Item", ItemSchema)

const ClientDataSchema = mongoose.Schema({
    ip : String,
})

const ClientData = mongoose.model("Client_Data", ClientDataSchema)

module.exports = {Item, ClientData}