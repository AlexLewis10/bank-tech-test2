import Withdrawal from './withdrawal'

const withdrawal = new Withdrawal(20, '14-01-2012')

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
