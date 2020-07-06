import Account from '../../src/account'

let account

describe('Prints bank statement', () => {
  account = new Account()
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
