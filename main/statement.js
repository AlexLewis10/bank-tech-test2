export default class Statement {
  constructor () {
    this.headerString = 'date || credit || debit || balance'
  }

  _printStatement () {
    return this.headerString
  }
}
