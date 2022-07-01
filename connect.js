const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://localhost:27017/Item", {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log("Success connect to DB")
})

module.exports = connection;