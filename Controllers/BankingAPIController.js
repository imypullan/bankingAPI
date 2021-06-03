const DbService = require('../Services/DbService')
const AccountService = require('../Services/AccountService')
const ObjectId = require('mongodb').ObjectId

let getAllAccounts = (req, res) => {
    DbService.connectToDb(async (db) => {
        const accountId = ObjectId(req.params.id)
        const allAccounts = await AccountService.getAllAccounts(db)
        res.json({
            "success": true,
            "message": "It worked",
            "status": 200,
            "data": allAccounts
        })
    })
}

let getAccountById = (req, res) => {
    DbService.connectToDb(async (db) => {
        const accountId = ObjectId(req.params.id)
        const userAccount = await AccountService.getAccountById(db, accountId)
        res.json({
            "success": true,
            "message": "It worked",
            "status": 200,
            "data": userAccount
        })
    })
}


module.exports.getAllAccounts = getAllAccounts
module.exports.getAccountById = getAccountById


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