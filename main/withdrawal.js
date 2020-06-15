export default class Withdrawal {
  constructor (amount, date, currentBalance) {
    this.amount = amount
    this.date = date
    this.currentBalance = currentBalance
  }

  _makeDebitItem () {
    return ['Debit', this.amount, this.date, this.currentBalance]
  }
}
