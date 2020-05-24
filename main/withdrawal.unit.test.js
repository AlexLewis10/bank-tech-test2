import Withdrawal from './withdrawal'

const withdrawal = new Withdrawal(20)

describe('withdrawal is initialised', () => {
  it('is defined', () => {
    expect(withdrawal).toBeDefined()
  })

  it('returns the amount to be withdrawn', () => {
    expect(withdrawal.amount).toBe(20)
  })
})
