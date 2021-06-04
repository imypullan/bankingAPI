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

let createNewAccount = async (db, account) => {
    const collection = db.collection('accounts')
    const result = await collection.insertOne({
        name: account.name,
        balance: account.balance
    })
    return result
}

let balanceTransferById = async (db, transaction) => {
    const collection = db.collection('accounts')
    const withdrawResult = await collection.updateOne(
        {_id: transaction.cardholderId},
        {$inc: {balance: -(transaction.transferSum)}})
    const addResult = await collection.updateOne(
        {_id: transaction.recipientId},
        {$inc: {balance: transaction.transferSum}}
    )
    if (withdrawResult.modifiedCount === 1 &&
    addResult.modifiedCount === 1) {
        return true;
    }
    return false;
}

let permanentlyRemoveAccountById = async (db, accountId) => {
    console.log(accountId)
    const collection = db.collection('accounts')
    const result = await collection.deleteOne({_id: accountId})
    return result
}

module.exports.getAllAccounts = getAllAccounts
module.exports.getAccountById = getAccountById
module.exports.changeBalanceById = changeBalanceById
module.exports.createNewAccount = createNewAccount
module.exports.balanceTransferById = balanceTransferById
module.exports.permanentlyRemoveAccountById = permanentlyRemoveAccountById