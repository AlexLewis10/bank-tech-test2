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
    expect(account.transactionHistory).toStrictEqual([['10-01-2012', 'Credit', 20, 20]])
  })
})

describe('Can make a withdrawal', () => {
  it('transaction is added to transaction history', () => {
    account.makeDeposit(20, '10-01-2012')
    account.makeWithdrawal(10, '11-10-2012')
    expect(account.transactionHistory).toStrictEqual([['10-01-2012', 'Credit', 20, 20], ['11-10-2012', 'Debit', 10, 10]])
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

  it('returns a message if there are insufficient funds', () => {
    account.makeDeposit(20, '10-01-2012')
    expect(account.makeWithdrawal(30)).toStrictEqual('Cannot withdraw money, insufficient funds')
  })

  it('does not update the balance if there are insufficient funds', () => {
    account.makeDeposit(20, '10-01-2012')
    account.makeWithdrawal(30)
    expect(account.balance).toStrictEqual(20)
  })
})
