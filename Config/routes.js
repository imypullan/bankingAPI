const BankingAPIController = require('../Controllers/BankingAPIController')

let routes = (app) => {
    app.get('/accounts', BankingAPIController.getAllAccounts)
    app.get('/accounts/:id', BankingAPIController.getAccountById)
    app.put('/accounts', BankingAPIController.changeBalanceById)
    // app.put('/accounts/balanceTransfer', BankingAPIController.balanceTransferById)
}

module.exports = routes