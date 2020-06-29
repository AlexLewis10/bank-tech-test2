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
  it('transaction is added to transaction history in the correct order', () => {
    account.makeDeposit(20, '10-01-2012')
    account.makeWithdrawal(10, '11-10-2012')

    expect(account.transactionHistory).toStrictEqual([['11-10-2012', 'Debit', 10, 10], ['10-01-2012', 'Credit', 20, 20]])
  })
})

describe('Balance updates', () => {
  it('when a deposit is made', () => {
    account.makeDeposit(20, '10-01-2012')

    expect(account.balance).toStrictEqual(20)
  })

  it('when a withdrawal is made', () => {
    account.makeDeposit(20, '10-01-2012')
    account.makeWithdrawal(10, '11-01-2012')

    expect(account.balance).toStrictEqual(10)
  })

  it('does not update the balance if there are insufficient funds', () => {
    account.makeDeposit(20, '10-01-2012')
    account.makeWithdrawal(30, '11-01-2012')

    expect(account.balance).toStrictEqual(20)
  })
})

describe('Prints bank statement', () => {
  it('prints in the console', () => {
    account.makeDeposit(1000, '10-01-2012')
    account.makeDeposit(2000, '13-01-2012')
    account.makeWithdrawal(500, '14-01-2012')
    const statementMock = jest.spyOn(console, 'log')
    account.getStatement()
    const transactions = 'date || credit || debit || balance' +
    '\n14/01/2012 || || 500.00 || 2500.00' +
    '\n13/01/2012 || 2000.00 || || 3000.00' +
    '\n10/01/2012 || 1000.00 || || 1000.00'

    expect(statementMock).toHaveBeenCalledWith(transactions)

    statementMock.mockReset()
  })
})

describe('Uses deposit class', () => {
  it('make deposit calls Deposit._makeDepositItem', () => {
    const depositInstance = account.deposit
    const depositMock = jest.spyOn(depositInstance, '_makeDepositItem')
    account.makeDeposit('10-10-11', 20)

    expect(depositMock).toHaveBeenCalled()

    depositMock.mockReset()
  })
})

describe('Uses withdrawal class', () => {
  it('makeWithdrawal calls Debit._makeDebitItem', () => {
    const withdrawalInstance = account.withdrawal
    const withdrawalMock = jest.spyOn(withdrawalInstance, '_makeDebitItem')
    account.makeWithdrawal('10-10-11', 20)

    expect(withdrawalMock).toHaveBeenCalled()

    withdrawalMock.mockReset()
  })

  describe('Uses statement class', () => {
    it('getStatement calls Statement._printStatement', () => {
      const statementInstance = account.statement
      const statementMock = jest.spyOn(statementInstance, '_printStatement')
      account.getStatement([['14-01-2012', 'Debit', 500, 2500], ['13-01-2012', 'Credit', 2000, 3000], ['10-01-2012', 'Credit', 1000, 1000]])

      expect(statementMock).toHaveBeenCalled()

      statementMock.mockReset()
    })
  })
})
