import Account from '../../src/account'

let account

beforeEach(() => {
  account = new Account()
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

describe('Uses deposit class', () => {
  it('make deposit calls Deposit._makeDepositItem', () => {
    const depositInstance = account.deposit
    const depositMock = jest.spyOn(depositInstance, '_makeDepositItem')
    account.makeDeposit(20, '10-10-2011')

    expect(depositMock).toHaveBeenCalled()

    depositMock.mockReset()
  })
})

describe('Uses withdrawal class', () => {
  it('makeWithdrawal calls Debit._makeDebitItem', () => {
    const withdrawalInstance = account.withdrawal
    const withdrawalMock = jest.spyOn(withdrawalInstance, '_makeWithdrawalItem')
    account.makeDeposit(30, '05-01-2012')
    account.makeWithdrawal(20, '10-01-2012')

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
