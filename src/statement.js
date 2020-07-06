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
    const date = this._formatDate(transaction[0])
    const creditAmount = this._formatNumber(transaction[2])
    const balance = this._formatNumber(transaction[3])
    const creditString = `\n${date} || ${creditAmount} || || ${balance}`
    this.statementInfo = `${this.statementInfo}${creditString}`
  }

  _addDebitTransaction (transaction) {
    const date = this._formatDate(transaction[0])
    const debitAmount = this._formatNumber(transaction[2])
    const balance = this._formatNumber(transaction[3])
    const debitString = `\n${date} || || ${debitAmount} || ${balance}`
    this.statementInfo = `${this.statementInfo}${debitString}`
  }

  _formatDate (date) {
    return date.replace(/-/g, '/')
  }

  _formatNumber (number) {
    return number.toFixed(2)
  }
}
