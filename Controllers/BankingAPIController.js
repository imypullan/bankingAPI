const DbService = require('../Services/DbService')
const AccountService = require('../Services/AccountService')
const ObjectId = require('mongodb').ObjectId

let getAllAccounts = (req, res) => {
    DbService.connectToDb(async (db) => {
        let accounts = await AccountService.getAllAccounts(db)
        res.json(accounts)
    })
}

module.exports.getAllAccounts = getAllAccounts

// //get all accounts
// app.get('/accounts', (req, res) => {
//     connectToDb(async (db) => {
//         const collection = db.collection('accounts')
//         const users = await collection.find({}).toArray()
//         res.json({
//             "success": true,
//             "message": "It worked",
//             "status": 200,
//             "data": users
//         })
//     })
// })
//
// //get specific account
// app.get('/accounts/:id', (req, res) => {
//     const id = ObjectId(req.params.id)
//     connectToDb(async (db) => {
//         const collection = db.collection('accounts')
//         const user = await collection.findOne({_id: id})
//         res.json({
//             "success": true,
//             "message": "It worked",
//             "status": 200,
//             "data": user
//         })
//     })
// })
//
// //add & remove money
// app.put('/accounts', (req, res) => {
//     const id = ObjectId(req.body.id)
//     const sum = req.body.sum
//     connectToDb(async (db) => {
//         const collection = db.collection('accounts')
//         const result = await collection.updateOne({_id: id}, {$inc: {balance: sum}})
//         if (result.modifiedCount === 1) {
//             res.json({
//                 "success": true,
//                 "message": "It worked",
//                 "status": 200,
//             })
//         } else {
//             res.sendStatus(500)
//         }
//     })
// })
//
// // balance transfer
// app.put('accounts/transfer', (req, res) => {
//     const cardholderId = ObjectId(req.body.cardHolderId)
//     const recipientId = ObjectId(req.body.recipientId)
//     const transferSum = req.body.transferSum
//     connectToDb(async (db) => {
//         const collection = db.collection('accounts')
//     })
//
// })