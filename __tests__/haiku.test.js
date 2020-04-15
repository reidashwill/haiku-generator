import { Haiku } from "./../src/haiku.js"

describe("Haiku", () => {
  
  // test('Should verify that object only contains strings', () => {
  //   const haiku = new Haiku("this is a string", "so is this", "this is yet another test string");
  //   expect(typeof(haiku.line1)).toEqual("string");
  //   expect(typeof(haiku.line2)).toEqual("string");
  //   expect(typeof(haiku.line3)).toEqual("string");
  // })

  // test('check for syllables in individual words', () => {
  //   const newHaiku = new Haiku("soothed", "yourselves", "funkingroovin");
  //   expect(newHaiku.syllableChecker(newHaiku.word)).toEqual(1);
  //   expect(newHaiku.syllableChecker(newHaiku.line2)).toEqual(2);
  //   expect(newHaiku.syllableChecker(newHaiku.line3)).toEqual(4);
  // })

  test("should determine if inputs are being changed into arrays" , () => {
    let haiku2 = new Haiku("this is a string", "this is also a string", "this as well is a string my friends");
    expect(haiku2.stringBreaker(haiku2.haikuArr)).toEqual(3);
  
    } )
})
