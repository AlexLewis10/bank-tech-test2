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

describe('Transaction history', () => {
  it('should have a transaction history array', () => {
    expect(account.transactionHistory).toStrictEqual([])
  })
})

describe('Can make a deposit', () => {
  it('transaction is added to transaction history', () => {
    account.makeDeposit(20, '10-01-2012')
    expect(account.transactionHistory).toStrictEqual([['Credit', 20, '10-01-2012', 20]])
  })
})

describe('Balance is updated', () => {
  it('when a deposit is made the balance is updated', () => {
    account.makeDeposit(20, '10-01-2012')
    expect(account.balance).toStrictEqual(20)
  })

  it('when a withdrawal is made the balance it updated', () => {
    account.makeDeposit(20, '10-01-2012')
    account.makeWithdrawal(10)
    expect(account.balance).toStrictEqual(10)
  })
})
