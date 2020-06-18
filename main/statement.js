export default class Statement {
  constructor () {
    this.transactionString = 'date || credit || debit || balance'
    this.transactionHistory = null
  }

  _printStatement () {
    for (let i = 0; i < this.transactionHistory.length; i++) {
      if (this.transactionHistory[i][1] === 'Credit') {
        this._addCreditTransaction(this.transactionHistory[i])
      }
      if (this.transactionHistory[i][1] === 'Debit') {
        this._addDebitTransaction(this.transactionHistory[i])
      }
    }
    return this.transactionString
  }

  _addCreditTransaction (transaction) {
    const date = this._formatDate(transaction[0])
    const creditAmount = this._formatNumber(transaction[2])
    const balance = this._formatNumber(transaction[3])
    const creditString = `\n${date} || ${creditAmount} || || ${balance}`
    this.transactionString = `${this.transactionString}${creditString}`
  }

  _addDebitTransaction (transaction) {
    const date = this._formatDate(transaction[0])
    const debitAmount = this._formatNumber(transaction[2])
    const balance = this._formatNumber(transaction[3])
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
