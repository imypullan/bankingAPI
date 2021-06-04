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

let createNewAccount = (req, res) => {
    DbService.connectToDb(async (db) => {
        const account = {
            name: req.body.name,
            balance: req.body.balance
        }
        const newAccount = await AccountService.createNewAccount(db, account)
        if (newAccount.insertedCount === 1) {
            res.json({
                "success": true,
                "message": "It worked",
                "status": 200,
                "data": newAccount
            })
        } else {
            res.sendStatus(404)
        }
    })
}

let balanceTransferById = (req, res) => {
    DbService.connectToDb(async (db) => {
        const transaction = {
            cardholderId: ObjectId(req.body.cardholderId),
            transferSum: req.body.transferSum,
            recipientId: ObjectId(req.body.recipientId)
        }
        const completedTransaction = await AccountService.balanceTransferById(db, transaction)
        if (completedTransaction) {
            res.json({
                "success": true,
                "message": "Transfer successful",
                "status": 200,
            })
        } else {
            res.sendStatus(500)
        }
    })
}

module.exports.getAllAccounts = getAllAccounts
module.exports.getAccountById = getAccountById
module.exports.changeBalanceById = changeBalanceById
module.exports.createNewAccount = createNewAccount
module.exports.balanceTransferById = balanceTransferById



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