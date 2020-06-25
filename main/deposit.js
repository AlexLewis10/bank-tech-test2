export default class Deposit {

  _makeDepositItem (date, amount, balance) {
    return [date, 'Credit', amount, balance]
  }
}
