import Statement from './Statement.js'

let statement

beforeEach(() => {
  statement = new Statement()
})

describe('Statement', () => {
  it('returns the first line of the statement', () => {
    expect(statement._printStatement()).toMatch(/date || credit || debit || balance/)
  })
})
