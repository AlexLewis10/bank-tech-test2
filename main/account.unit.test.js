import Account from './account'

const account = new Account()

describe('Account', () => {
  it('should be defined', () => {
    expect(account.balance).toBe(0)
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
