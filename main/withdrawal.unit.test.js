import Withdrawal from './withdrawal'

const withdrawal = new Withdrawal()

describe('withdrawal is initialised', () => {
  it('is defined', () => {
    expect(withdrawal).toBeDefined()
  })
})
