export default class Statement {
  constructor () {
    this.headerString = 'date || credit || debit || balance'
  }

  _printStatement (transactionHistory) {
    const date = this._formatDate(transactionHistory[0][0])
    const creditAmount = this._formatNumber(transactionHistory[0][2])
    const balance = this._formatNumber(transactionHistory[0][3])
    return `${this.headerString}\n ${date} || ${creditAmount} || || ${balance}`
  }

  _formatDate (date) {
    return date.replace(/-/g, '/')
  }

  _formatNumber (number) {
    return number.toFixed(2)
  }
}
