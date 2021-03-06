const DATE = 0
const AMOUNT = 2
const BALANCE = 3

export default class Statement {
  constructor () {
    this.statementInfo = 'date || credit || debit || balance'
  }

  _printStatement (transactionHistory) {
    for (let i = 0; i < transactionHistory.length; i++) {
      if (transactionHistory[i][1] === 'Credit') {
        this._addCreditTransaction(transactionHistory[i])
      }
      if (transactionHistory[i][1] === 'Debit') {
        this._addDebitTransaction(transactionHistory[i])
      }
    }
    return this.statementInfo
  }

  _addCreditTransaction (transaction) {
    const date = this._formatDate(transaction[DATE])
    const creditAmount = this._formatNumber(transaction[AMOUNT])
    const balance = this._formatNumber(transaction[BALANCE])
    const creditInfo = `\n${date} || ${creditAmount} || || ${balance}`
    this.statementInfo = `${this.statementInfo}${creditInfo}`
  }

  _addDebitTransaction (transaction) {
    const date = this._formatDate(transaction[DATE])
    const debitAmount = this._formatNumber(transaction[AMOUNT])
    const balance = this._formatNumber(transaction[BALANCE])
    const debitInfo = `\n${date} || || ${debitAmount} || ${balance}`
    this.statementInfo = `${this.statementInfo}${debitInfo}`
  }

  _formatDate (date) {
    return date.replace(/-/g, '/')
  }

  _formatNumber (number) {
    return number.toFixed(2)
  }
}
