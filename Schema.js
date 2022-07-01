const mongoose = require("mongoose")

const ItemSchema = mongoose.Schema({
    content : String
})

const Item = mongoose.model("Item", ItemSchema)

module.exports = Item