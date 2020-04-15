import { Haiku } from "./../src/haiku.js"

describe("Haiku", () => {
  
  test('Should verify that object only contains strings', () => {
    const haiku = new Haiku("this is a test", "so is this", "this is yet another test string")
    expect(typeOf(haiku.line1).toEqual("string"))
  })
})