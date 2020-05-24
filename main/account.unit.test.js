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

// import Cat from './account'

// const dave = new Cat()

// describe('Cat', () => {
//   it('should be defined', () => {
//     expect(dave).toBeDefined()
//   })
// })

// describe('meow', () => {
//   it('should be defined', () => {
//     expect(dave.meow()).toBeDefined()
//   })

//   it('says meow', ()=> {
//     expect(dave.meow()).toEqual('meow')
//   })
// })
