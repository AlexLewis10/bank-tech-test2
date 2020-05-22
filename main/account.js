export default class Cat {
  constructor (name) {
    this.name = name
  }
}

Cat.prototype.meow = () => {
  return 'meow'
}

// module.exports = Cat

// const hello = (message) => {
//   return 'Hello World!' + message
// }

// exports.hello = hello
