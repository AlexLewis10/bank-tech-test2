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

describe('Balance updates', () => {
  it('when a deposit is made', () => {
    account.makeDeposit(20, '10-01-2012')
    expect(account.balance).toStrictEqual(20)
  })

  it('when a withdrawal is made', () => {
    account.makeDeposit(20, '10-01-2012')
    account.makeWithdrawal(10)
    expect(account.balance).toStrictEqual(10)
  })

  it('does not update if there are insufficient funds', () => {
    account.makeDeposit(20, '10-01-2012')
    expect(account.makeWithdrawal(30)).toStrictEqual('Cannot withdraw money, insufficient funds')
    
  })
})
