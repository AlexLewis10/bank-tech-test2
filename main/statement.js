export default class Statement {
  constructor () {
    this.transactionString = 'date || credit || debit || balance'
  }

  _printStatement (transactionHistory) {
    for (let i = 0; i < transactionHistory.length; i++) {
      const date = this._formatDate(transactionHistory[i][0])
      const creditAmount = this._formatNumber(transactionHistory[i][2])
      const balance = this._formatNumber(transactionHistory[i][3])
      const debitString = `\n${date} || ${creditAmount} || || ${balance}`
      this.transactionString = `${this.transactionString}${debitString}`
    }
    return this.transactionString
  }

  _formatDate (date) {
    return date.replace(/-/g, '/')
  }

  _formatNumber (number) {
    return number.toFixed(2)
  }
}
