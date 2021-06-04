const BankingAPIController = require('../Controllers/BankingAPIController')

let routes = (app) => {
    app.get('/accounts', BankingAPIController.getAllAccounts)
    app.get('/accounts/:id', BankingAPIController.getAccountById)
    app.put('/accounts/balanceChange', BankingAPIController.changeBalanceById)
    app.post('/accounts/newAccount', BankingAPIController.createNewAccount)
    app.put('/accounts/balanceTransfer', BankingAPIController.balanceTransferById)
}

module.exports = routes