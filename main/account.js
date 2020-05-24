import Deposit from './deposit'

export default class Account {
  constructor () {
    this.balance = 0
    this.transactionHistory = []
  }

  makeDeposit (date, amount) {
    const deposit = new Deposit(date, amount)
    return deposit.deposit()
  }

  _updateTransactionHistory () {
    this.transactionHistory.push(['Credit', 20, '10-01-2012'])
  }
}
