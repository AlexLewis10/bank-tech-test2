export default class Deposit {
  constructor (amount, date) {
    this.amount = amount
    this.date = date
  }

  makeDeposit () {
    return ['Credit', this.amount, this.date]
  }
}