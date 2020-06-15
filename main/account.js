import Deposit from './deposit'

export default class Account {
  constructor () {
    this.balance = 0
    this.transactionHistory = []
  }

  makeDeposit (amount, date) {
    this.balance += amount
    const deposit = new Deposit(amount, date)
    this._updateTransactionHistory(deposit._makeDepositItem())
  }

  _updateTransactionHistory (transaction) {
    this.transactionHistory.push(transaction)
  }
}
