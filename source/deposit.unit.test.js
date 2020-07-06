import Deposit from './deposit.js'

let deposit

beforeEach(() => {
  deposit = new Deposit(20, '10-01-2012', 20)
})

describe('Deposit is initialised', () => {
  it('is defined', () => {
    expect(deposit).toBeDefined()
  })
})

describe('_makeDepositItem', () => {
  it('returns the type, amount, date and current balance', () => {
    expect(deposit._makeDepositItem('10-01-2012', 20, 20)).toStrictEqual(['10-01-2012', 'Credit', 20, 20])
  })
})
