const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const exphbs = require('express-handlebars')


const app = express()
const port = 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.json())

const url = 'mongodb://root:password@localhost:27017'
const dbName = 'bank'

const Client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})

let connectToDb = (cb) => {
    Client.connect((error) => {
        let db = Client.db(dbName)
        cb(db)
    })
}

//get all accounts
app.get('/accounts', (req, res) => {
    connectToDb(async (db) => {
        const collection = db.collection('accounts')
        const users = await collection.find({}).toArray()
        res.json({
            "success": true,
            "message": "It worked",
            "status": 200,
            "data": users
        })
    })
})

//get specific account
app.get('/accounts/:id', (req, res) => {
    const id = ObjectId(req.params.id)
    connectToDb(async (db) => {
        const collection = db.collection('accounts')
        const user = await collection.findOne({_id: id})
       res.json({
            "success": true,
            "message": "It worked",
            "status": 200,
            "data": user
        })
    })
})

//add & remove money
app.put('/accounts', (req, res) => {
    const id = ObjectId(req.body.id)
    const sum = req.body.sum
    connectToDb(async (db) => {
        const collection = db.collection('accounts')
        const result = await collection.updateOne({_id: id}, {$inc: {balance: sum}})
        if (result.modifiedCount === 1) {
            res.json({
                "success": true,
                "message": "It worked",
                "status": 200,
            })
        } else {
            res.sendStatus(500)
        }
    })
})








app.listen(port)