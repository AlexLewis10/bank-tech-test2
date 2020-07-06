export default class Statement {
  constructor (transactionHistory) {
    this.transactionString = 'date || credit || debit || balance'
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
    return this.transactionString
  }

  _addCreditTransaction (transaction) {
    const DATE = this._formatDate(transaction[0])
    const CREDIT_AMOUNT = this._formatNumber(transaction[2])
    const BALANCE = this._formatNumber(transaction[3])
    const CREDIT_STRING = `\n${DATE} || ${CREDIT_AMOUNT} || || ${BALANCE}`
    this.transactionString = `${this.transactionString}${CREDIT_STRING}`
  }

  _addDebitTransaction (transaction) {
    const DATE = this._formatDate(transaction[0])
    const DEBIT_AMOUNT = this._formatNumber(transaction[2])
    const BALANCE = this._formatNumber(transaction[3])
    const DEBIT_STRING = `\n${DATE} || || ${DEBIT_AMOUNT} || ${BALANCE}`
    this.transactionString = `${this.transactionString}${DEBIT_STRING}`
  }

  _formatDate (date) {
    return date.replace(/-/g, '/')
  }

  _formatNumber (number) {
    return number.toFixed(2)
  }
}
