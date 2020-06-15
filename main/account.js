import Deposit from './deposit'

export default class Account {
  constructor () {
    this.balance = 0
    this.transactionHistory = []
  }

  makeDeposit (date, amount) {
    const deposit = new Deposit(date, amount)
    this._updateTransactionHistory(deposit._makeDepositItem())
  }

  _updateTransactionHistory (transaction) {
    this.transactionHistory.push(transaction)
  }
}
