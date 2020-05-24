import Deposit from './deposit'

const deposit = new Deposit(20)

describe('deposit', () => {
  it('is defined', () => {
    expect(deposit).toBeDefined()
  })
})

describe('deposit has an amount', () => {
  it('returns the amount to be deposited', () => {
    expect(deposit.amount).toBe(20)
  })
})
