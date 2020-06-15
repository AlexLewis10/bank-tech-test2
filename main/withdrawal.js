export default class Withdrawal {
  constructor (amount, date) {
    this.amount = amount
    this.date = date
  }

  _makeDebitItem () {
    return ['Debit', this.amount, this.date]
  }
}
