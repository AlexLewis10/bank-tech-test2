import Statement from './Statement.js'

let statement

beforeEach(() => {
  statement = new Statement()
})

describe('Statement', () => {
  it('returns the first line of the statement', () => {
    expect(statement._printStatement([['10-01-2012', 'Credit', 1000, 1000]])).toMatch(/date || credit || debit || balance/)
  })

  it('returns a statement with a credit', () => {
    expect(statement._printStatement([['10-01-2012', 'Credit', 1000, 1000]])).toStrictEqual('date || credit || debit || balance' +
                                                                                            '\n10/01/2012 || 1000.00 || || 1000.00')
  })

  it('returns a statement with more than one credit', () => {
    expect(statement._printStatement([['13-01-2012', 'Credit', 2000, 3000], ['10-01-2012', 'Credit', 1000, 1000]])).toStrictEqual('date || credit || debit || balance' +
                                                                                                                                  '\n13/01/2012 || 2000.00 || || 3000.00' +
                                                                                                                                  '\n10/01/2012 || 1000.00 || || 1000.00')
  })
})