export default class Withdrawal {
  constructor (amount, date, currentBalance) {
    this.amount = amount
    this.date = date
    this.currentBalance = currentBalance
  }

  _makeDebitItem () {
    return [this.date, 'Debit', this.amount, this.currentBalance]
  }
}
