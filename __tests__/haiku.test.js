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
  //   expect(newHaiku.syllableChecker(newHaiku.line1)).toEqual(1);
  //   expect(newHaiku.syllableChecker(newHaiku.line2)).toEqual(2);
  //   expect(newHaiku.syllableChecker(newHaiku.line3)).toEqual(4);
  // })

  // test("should determine if inputs are being changed into arrays" , () => {
  //   let haiku2 = new Haiku("soothed is a string", "yourselves is also a string", "funkingroovin as well is a string my friends");
  //   expect(haiku2.stringBreaker().length).toEqual(3);
  //   } )

    test("should return numbers of syllables in each index", () => {
      let testVar = new Haiku (["test", "number", "funkingroovin"],[""],[""])
      expect(testVar.testFunction()).toEqual(7);
    })
  })