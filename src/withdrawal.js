export default class Withdrawal {
  _makeWithdrawalItem (date, amount, balance) {
    return [date, 'Debit', amount, balance]
  }
}
