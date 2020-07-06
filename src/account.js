import Deposit from './deposit.js'
import Withdrawal from './withdrawal'
import Statement from './statement.js'

const INITIAL_BALANCE = 0

export default class Account {
  constructor (
    deposit = new Deposit(),
    withdrawal = new Withdrawal(),
    statement = new Statement()
  ) {
    this.balance = INITIAL_BALANCE
    this.transactionHistory = []
    this.deposit = deposit
    this.withdrawal = withdrawal
    this.statement = statement
  }

  makeDeposit (amount, date) {
    this._updateBalanceAfterDeposit(amount)
    const depositItem = this.deposit._makeDepositItem(date, amount, this.balance)
    this._updateTransactionHistory(depositItem)
  }

  makeWithdrawal (amount, date) {
    if (amount > this.balance) {
      return 'Cannot withdraw money, insufficient funds'
    }
    this._updateBalanceAfterWithdrawal(amount)
    const withdrawalItem = this.withdrawal._makeWithdrawalItem(date, amount, this.balance)
    this._updateTransactionHistory(withdrawalItem)
  }

  getStatement () {
    const statement = this.statement._printStatement(this.transactionHistory)
    console.log(statement)
  }

  _updateTransactionHistory (transaction) {
    this.transactionHistory.unshift(transaction)
  }

  _updateBalanceAfterDeposit (amount) {
    this.balance += amount
  }

  _updateBalanceAfterWithdrawal (amount) {
    this.balance -= amount
  }
}
