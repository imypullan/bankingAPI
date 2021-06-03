let getAllAccounts = async (db) => {
    let collection = db.collection('accounts')
    let result = await collection.find({}).toArray()
    return result
}

module.exports.getAllAccounts = getAllAccounts