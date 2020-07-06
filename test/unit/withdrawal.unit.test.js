import Withdrawal from '../../src/withdrawal'

let withdrawal

beforeEach(() => {
  withdrawal = new Withdrawal()
})

describe('withdrawal is initialised', () => {
  it('is defined', () => {
    expect(withdrawal).toBeDefined()
  })
})

describe('_makeDebitItem', () => {
  it('returns the type, amount, date and current balance', () => {
    expect(withdrawal._makeWithdrawalItem('14-01-2012', 20, 10)).toStrictEqual(['14-01-2012', 'Debit', 20, 10])
  })
})
