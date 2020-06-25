import Deposit from './deposit.js'
import Withdrawal from './withdrawal'
import Statement from './statement.js'

export default class Account {
  constructor (
    deposit = new Deposit(),
    withdrawal = new Withdrawal()
  ) {
    this.balance = 0
    this.transactionHistory = []
    this.deposit = deposit
    this.withdrawal = withdrawal
  }

  makeDeposit (amount, date) {
    this._updateBalanceAfterDeposit(amount)
    const DEPOSIT_ITEM = this.deposit._makeDepositItem(date, amount, this.balance)
    this._updateTransactionHistory(DEPOSIT_ITEM)
  }

  makeWithdrawal (amount, date) {
    if (amount > this.balance) {
      return 'Cannot withdraw money, insufficient funds'
    }
    this._updateBalanceAfterDebit(amount)
    const DEBIT_ITEM = this.withdrawal._makeDebitItem(date, amount, this.balance)
    this._updateTransactionHistory(DEBIT_ITEM)
  }

  getStatement () {
    let statement = new Statement(this.transactionHistory)
    statement = statement._printStatement()
    return statement
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
