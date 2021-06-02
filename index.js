const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const app = express()
const port = 3000

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







app.listen(port)