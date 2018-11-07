const expect = require('expect')

const utils = require('./utils')

it("should add two numbers", () => {
    const result = utils.add(10, 34)

    expect(result).toBe(44).toBeA('number')   
})

it("should square a number", () => {
    const result = utils.square(10)

    expect(result).toBe(100).toBeA('number')   
})