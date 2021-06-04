const BankingAPIController = require('../Controllers/BankingAPIController')

let routes = (app) => {
    app.get('/accounts', BankingAPIController.getAllAccounts)
    app.get('/accounts/:id', BankingAPIController.getAccountById)
    app.put('/accounts/changeBalance', BankingAPIController.changeBalanceById)
    app.post('/accounts/addNew', BankingAPIController.createNewAccount)
    // app.put('/accounts/balanceTransfer', BankingAPIController.balanceTransferById)
}

module.exports = routes