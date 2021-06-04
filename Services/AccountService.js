let getAllAccounts = async (db) => {
    const collection = db.collection('accounts')
    const result = await collection.find({}).toArray()
    return result
}

let getAccountById = async (db, accountId) => {
    const collection = db.collection('accounts')
    const result = await collection.findOne({_id: accountId})
    return result
}

let changeBalanceById = async (db, account) => {
    const collection = db.collection('accounts')
    const result = await collection.updateOne(
        {_id: account.id},
        {$inc: {balance: account.sum}})
    return result
}

module.exports.getAllAccounts = getAllAccounts
module.exports.getAccountById = getAccountById
module.exports.changeBalanceById = changeBalanceById