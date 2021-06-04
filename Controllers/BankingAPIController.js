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

let changeBalanceById = (req, res) => {
    DbService.connectToDb(async (db) => {
        const account = {
            id: ObjectId(req.body.id),
            sum: req.body.sum
        }
        console.log(account)
        const updatedAccount = await AccountService.changeBalanceById(db, account)
        if(updatedAccount.modifiedCount === 1) {
            res.json({
                "success": true,
                "message": "It worked",
                "status": 200,
                "data": updatedAccount
            })
        } else {
            res.sendStatus(404)
        }
    })
}


module.exports.getAllAccounts = getAllAccounts
module.exports.getAccountById = getAccountById
module.exports.changeBalanceById = changeBalanceById


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