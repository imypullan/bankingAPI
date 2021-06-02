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

app.get('/accounts', (req, res) => {
    connectToDb(async (db) => {
        //now have access to the db connection via the db param
        //tell mongo which collection we want to work with
        const collection = db.collection('accounts')
        //run query using await to avoid more callbacks
        const data = await collection.find({}).toArray()
        res.json(data)
    })
})

console.log('hello')








app.listen(port)