import Statement from './Statement.js'

let statement

beforeEach(() => {
  statement = new Statement()
})

describe('Statement', () => {
  it('returns the first line of the statement', () => {
    statement.transactionHistory = [['10-01-2012', 'Credit', 1000, 1000]]

    expect(statement._printStatement()).toMatch(/date || credit || debit || balance/)
  })

  it('returns a statement with a credit', () => {
    statement.transactionHistory = [['10-01-2012', 'Credit', 1000, 1000]]

    expect(statement._printStatement()).toStrictEqual('date || credit || debit || balance' +
    '\n10/01/2012 || 1000.00 || || 1000.00')
  })

  it('returns a statement with more than one credit', () => {
    statement.transactionHistory = [['13-01-2012', 'Credit', 2000, 3000], ['10-01-2012', 'Credit', 1000, 1000]]

    expect(statement._printStatement()).toStrictEqual('date || credit || debit || balance' +
    '\n13/01/2012 || 2000.00 || || 3000.00' +
    '\n10/01/2012 || 1000.00 || || 1000.00')
  })

  it('returns a statement with a debit', () => {
    statement.transactionHistory = [['14-01-2012', 'Debit', 500, 2500]]

    expect(statement._printStatement()).toStrictEqual('date || credit || debit || balance' +
    '\n14/01/2012 || || 500.00 || 2500.00')
  })

  it('returns a statement with credits and debits', () => {
    statement.transactionHistory = [['14-01-2012', 'Debit', 500, 2500], ['13-01-2012', 'Credit', 2000, 3000], ['10-01-2012', 'Credit', 1000, 1000]]

    expect(statement._printStatement()).toStrictEqual('date || credit || debit || balance' +
    '\n14/01/2012 || || 500.00 || 2500.00' +
    '\n13/01/2012 || 2000.00 || || 3000.00' +
    '\n10/01/2012 || 1000.00 || || 1000.00')
  })
})
