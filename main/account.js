import Deposit from './deposit.js'

export default class Account {
  constructor () {
    this.balance = 0
    this.transactionHistory = []
  }

  makeDeposit (amount, date) {
    this._updateBalance(amount)
    const deposit = new Deposit(amount, date, this.balance)
    this._updateTransactionHistory(deposit._makeDepositItem())
  }

  makeWithdrawal (amount, date) {
    if (amount > this.balance) {
      return 'Cannot withdraw money, insufficient funds'
    }
    this.balance -= amount
  }

  _updateTransactionHistory (transaction) {
    this.transactionHistory.push(transaction)
  }

  _updateBalance (amount) {
    this.balance += amount
  }
}
