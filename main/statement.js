export default class Statement {
  constructor () {
    this.transactionString = 'date || credit || debit || balance'
  }

  _printStatement (transactionHistory) {
    for (let i = 0; i < transactionHistory.length; i++) {
      if (transactionHistory[i][1] === 'Credit') {
        this._addCreditTransaction(transactionHistory[i][0],
          transactionHistory[i][2],
          transactionHistory[i][3])
      }
      if (transactionHistory[i][1] === 'Debit') {
        this._addDebitTransaction(transactionHistory[i][0],
          transactionHistory[i][2],
          transactionHistory[i][3])
      }
    }
    return this.transactionString
  }

  _addCreditTransaction (transactionDate, transactionAmount, transactionBalance) {
    const date = this._formatDate(transactionDate)
    const creditAmount = this._formatNumber(transactionAmount)
    const balance = this._formatNumber(transactionBalance)
    const creditString = `\n${date} || ${creditAmount} || || ${balance}`
    this.transactionString = `${this.transactionString}${creditString}`
  }

  _addDebitTransaction (transactionDate, transactionAmount, transactionBalance) {
    const date = this._formatDate(transactionDate)
    const debitAmount = this._formatNumber(transactionAmount)
    const balance = this._formatNumber(transactionBalance)
    const debitString = `\n${date} || || ${debitAmount} || ${balance}`
    this.transactionString = `${this.transactionString}${debitString}`
  }

  _formatDate (date) {
    return date.replace(/-/g, '/')
  }

  _formatNumber (number) {
    return number.toFixed(2)
  }
}
