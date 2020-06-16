export default class Statement {
  constructor () {
    this.headerString = 'date || credit || debit || balance'
  }

  _printStatement (transactionHistory) {
    let date = transactionHistory[0][0]
    date = date.replace(/-/g, '/')
    let creditAmount = transactionHistory[0][2]
    creditAmount = creditAmount.toFixed(2)
    let balance = transactionHistory[0][3]
    balance = balance.toFixed(2)
    return `${this.headerString}\n ${date} || ${creditAmount} || || ${balance}`
  }
}
