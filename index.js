const express = require('express')
const connection = require('./connect')
const {Item, ClientData} = require('./Schema')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch');
const stringProcess = require('./ProcessString')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

//Get Ip of client
app.get('',async (req, res, next) => {
    //Fetch in Cloufare
    await fetch('https://www.cloudflare.com/cdn-cgi/trace')
    .then(res => res.text())
    .then(data => {
        var ipString = stringProcess(data)
        var clientData = new ClientData({
            ip : ipString
        });

        //Save ip
        clientData.save((err) => {
            if (err) console.log(err)
            res.json(ipString)
        })
    })
})

//Get list Messages
app.get('/api/items', (req, res, next)=> {
    Item.find({}, (err, items)=> {
        if (err) console.log(err)
        items.forEach(element => {
            if (element.active == true) {
               var today = new Date();
               if (today.getDate() - element.created_date.getDate() == 0) {
                Item.findOne({_id : element._id}, (err, item) => {
                    if (!err) {
                        item.active = false
                        item.save((err) => {
                            if (err) console.log(err)
                        })
                    } else {
                        console.log(err)
                    }
                })
               }
            }
        });
        res.json(items)
    })

})

app.listen(port, ()=> {
    console.log("Server in port 3001");
})