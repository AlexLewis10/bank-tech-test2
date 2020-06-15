import Deposit from './deposit.js'
import Withdrawal from './withdrawal'

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
    const withdrawal = new Withdrawal(amount, date, this.balance)
    this._updateTransactionHistory(withdrawal._makeDebitItem())
  }

  _updateTransactionHistory (transaction) {
    this.transactionHistory.push(transaction)
  }

  _updateBalance (amount) {
    this.balance += amount
  }
}
