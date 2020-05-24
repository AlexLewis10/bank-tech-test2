import Deposit from './deposit'

const deposit = new Deposit(20, '10-01-2012')

describe('deposit is initialised', () => {
  it('is defined', () => {
    expect(deposit).toBeDefined()
  })

  it('returns the amount to be deposited', () => {
    expect(deposit.amount).toBe(20)
  })

  it('returns the date of the deposit', () => {
    expect(deposit.date).toBe('10-01-2012')
  })
})

describe('makeDeposit returns an array', () => {
  it('returns the amount and the date of the deposit', () => {
    expect(deposit.deposit()).toStrictEqual(['Credit', 20, '10-01-2012'])
  })
})
