const BankingAPIController = require('../Controllers/BankingAPIController')

let routes = (app) => {
    app.get('/accounts', BankingAPIController.getAllAccounts)
    app.get('/accounts/:id', BankingAPIController.getAccountById)
    app.put('/accounts/balanceChange', BankingAPIController.changeBalanceById)
    app.post('/accounts', BankingAPIController.createNewAccount)
    app.put('/accounts/balanceTransfer', BankingAPIController.balanceTransferById)
    app.delete('/accounts', BankingAPIController.permanentlyRemoveAccountById)
}

module.exports = routes