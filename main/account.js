export default class Account {
  constructor () {
    this.balance = 0
    this.transactionHistory = []
  }

  makeDeposit () {
    return ['Credit', 20, '10-01-2012']
  }
}
