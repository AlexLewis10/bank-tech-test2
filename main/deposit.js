export default class Deposit {
  constructor (amount, date) {
    this.amount = amount
    this.date = date
  }

  _makeDepositItem () {
    return ['Credit', this.amount, this.date]
  }
}
