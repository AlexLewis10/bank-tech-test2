import Account from './account'

let account

beforeEach(() => {
  account = new Account()
})

describe('Balance', () => {
  it('should equal zero', () => {
    expect(account.balance).toBe(0)
  })
})

describe('transaction history', () => {
  it('should have a transaction history array', () => {
    expect(account.transactionHistory).toStrictEqual([])
  })
})

describe('can make a deposit', () => {
  it('returns an array with the deposit', () => {
    account.makeDeposit(20, '10-01-2012')
    expect(account.transactionHistory).toStrictEqual([['Credit', 20, '10-01-2012']])
  })
})

describe('Balance is updated', () => {
  it('when a deposit is made the balance is updated', () => {
    account.makeDeposit(20, '10-01-2012')
    expect(account.balance).toStrictEqual(20)
  })
})
