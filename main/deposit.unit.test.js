import Deposit from './deposit.js'

let deposit

beforeEach(() => {
  deposit = new Deposit(20, '10-01-2012', 20)
})

describe('Deposit is initialised', () => {
  it('is defined', () => {
    expect(deposit).toBeDefined()
  })

  it('returns the amount to be deposited', () => {
    expect(deposit.amount).toBe(20)
  })

  it('returns the date of the deposit', () => {
    expect(deposit.date).toBe('10-01-2012')
  })

  it('returns the current balance', () => {
    expect(deposit.currentBalance).toBe(20)
  })
})

describe('_makeDepositItem', () => {
  it('returns the type, amount, date and current balance', () => {
    expect(deposit._makeDepositItem()).toStrictEqual(['Credit', 20, '10-01-2012', 20])
  })
})
