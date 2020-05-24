import Deposit from './deposit'

const deposit = new Deposit(20, '10-01-2012')

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

describe('deposit has a date', () => {
  it('returns the date of the deposit', () => {
    expect(deposit.date).toBe('10-01-2012')
  })
})
