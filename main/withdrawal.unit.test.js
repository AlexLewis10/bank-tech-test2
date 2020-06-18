import Withdrawal from './withdrawal'

let withdrawal

beforeEach(() => {
  withdrawal = new Withdrawal(20, '14-01-2012', 10)
})

describe('withdrawal is initialised', () => {
  it('is defined', () => {
    expect(withdrawal).toBeDefined()
  })

  it('returns the amount to be withdrawn', () => {
    expect(withdrawal.amount).toBe(20)
  })

  it('is initialised with date of the transaction', () => {
    expect(withdrawal.date).toBe('14-01-2012')
  })
})

describe('_makeWithdrawalItem', () => {
  it('returns the type, amount, date and current balance', () => {
    expect(withdrawal._makeDebitItem()).toStrictEqual(['14-01-2012', 'Debit', 20, 10])
  })
})
