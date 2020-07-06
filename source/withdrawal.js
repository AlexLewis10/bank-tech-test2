export default class Withdrawal {
  _makeDebitItem (date, amount, balance) {
    return [date, 'Debit', amount, balance]
  }
}
