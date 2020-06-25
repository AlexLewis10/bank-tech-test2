import Deposit from './deposit.js'
import Withdrawal from './withdrawal'
import Statement from './statement.js'

export default class Account {
  constructor (
    deposit = new Deposit()
  ) {
    this.balance = 0
    this.transactionHistory = []
    this.deposit = deposit
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
    const withdrawal = new Withdrawal(amount, date, this.balance)
    this._updateTransactionHistory(withdrawal._makeDebitItem())
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
