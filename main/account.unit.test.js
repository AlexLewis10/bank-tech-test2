import Account from './account'

const account = new Account()

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
