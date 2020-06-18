import Deposit from './deposit.js'
import Withdrawal from './withdrawal'

export default class Account {
  constructor () {
    this.balance = 0
    this.transactionHistory = []
  }

  makeDeposit (amount, date) {
    this._updateBalanceAfterDeposit(amount)
    const deposit = new Deposit(amount, date, this.balance)
    this._updateTransactionHistory(deposit._makeDepositItem())
  }

  makeWithdrawal (amount, date) {
    if (amount > this.balance) {
      return 'Cannot withdraw money, insufficient funds'
    }
    this._updateBalanceAfterDebit(amount)
    const withdrawal = new Withdrawal(amount, date, this.balance)
    this._updateTransactionHistory(withdrawal._makeDebitItem())
  }

  _updateTransactionHistory (transaction) {
    this.transactionHistory.unshift(transaction)
  }

  _updateBalanceAfterDeposit (amount) {
    this.balance += amount
  }

  _updateBalanceAfterDebit (amount) {
    this.balance -= amount
  }
}
