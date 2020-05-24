export default class Deposit {
  constructor (amount, date) {
    this.amount = amount
    this.date = date
  }

  deposit () {
    return ['Credit', this.amount, this.date]
  }
}
