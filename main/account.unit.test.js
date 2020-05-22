// const { hello } = require('./account')

// describe('hello', () => {
//   it('should be defined', () => {
//     expect(hello).toBeDefined()
//   })
// })
import Cat from './account'
// const { Cat } = require('./account')
// const { meow } = require('./account')
const dave = new Cat()

describe('Cat', () => {
  it('should be defined', () => {
    expect(dave).toBeDefined()
  })
})

describe('meow', () => {
  it('should be defined', () => {
    expect(dave.meow()).toBeDefined()
  })
})
