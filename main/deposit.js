export default class Deposit {
  constructor (amount, date, currentBalance) {
    this.amount = amount
    this.date = date
    this.currentBalance = currentBalance
  }

  _makeDepositItem () {
    return ['Credit', this.amount, this.date]
  }
}
