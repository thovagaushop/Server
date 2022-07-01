const express = require('express')
const connection = require('./connect')
const Item = require('./Schema')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.get('/api/items', (req, res, next)=> {
    Item.find({}, (err, items)=> {
        if (err) console.log(err)
        res.json(items)
    })

})

app.listen(port, ()=> {
    console.log("Server in port 3001");
})