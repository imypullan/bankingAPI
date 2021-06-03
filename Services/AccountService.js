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

module.exports.getAllAccounts = getAllAccounts
module.exports.getAccountById = getAccountById