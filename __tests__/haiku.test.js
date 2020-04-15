import { Haiku } from "./../src/haiku.js"

describe("Haiku", () => {
  
  test('Should verify that object only contains strings', () => {
    const haiku = new Haiku("this is a string", "so is this", "this is yet another test string");
    expect(typeof(haiku.line1)).toEqual("string");
    expect(typeof(haiku.line2)).toEqual("string");
    expect(typeof(haiku.line3)).toEqual("string");
  })

  test('should check to see if line1 contains 5 syllables', () => {
    const newHaiku = new Haiku("this is a string", "so is this", "this is another string");
    expect(newHaiku.syllableChecker(newHaiku.line1)).toEqual(4);
    expect(newHaiku.syllableChecker(newHaiku.line2)).toEqual(3);
    expect(newHaiku.syllableChecker(newHaiku.line3)).toEqual(6);
  })
})
