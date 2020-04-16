export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line1Array = null;
    this.line2Array = null;
    this.line3Array = null;
    this.numOfSyllable = 0;
  }

  stringBreaker() {
    // var haikuArr = [this.line1Arr, this.line2Arr, this.line3Arr];
    // haikuArr.forEach((myLine) => {
    // this.syllableChecker()
    // })
    this.line1Array = (this.line1.split(" "));
    this.line2Array = (this.line2.split(" "));
    this.line3Array = (this.line3.split(" "));
    //[[line1split],[line2split],[line3split]]

    // for (let i = 0; i < haikuArr.length; i++){
    //   newArray.push(haikuArr[i].split(" "));
    //  }
    return true;
  }

  syllableChecker(passedWord) {
    let word = passedWord.toLowerCase();
    // let array = [];
    if (word.length <= 3) {
      return 1;
    } else {
      word = word.replace(/([^laeiouy]es|ed)$/i, '');
      word = word.replace(/([.!?:;])$/i, '');
      word = word.replace(/^y/i, '');
      return (word.match(/[aeiouy]{1,2}/gi).length);
      // const reducer = function (accumulator, currentValue) {
      //   accumulator + currentValue;
      // };
      // this.numOfSyllable = array.reduce(reducer); 
     
    }
  }

  solver() {
    this.stringBreaker();
    console.log("Solver called line1array: ", this.line1Array);
    console.log("Solver called line2Array: ", this.line2Array);
    console.log("Solver called line3Array: ", this.line3Array);
    this.line1Array.forEach(myword => {
      this.syllableChecker(myword);

    });
    this.line2Array.forEach(myword => {
      this.syllableChecker(myword);

    });
    this.line3Array.forEach(myword => {
      this.syllableChecker(myword);
      
    });


    // this.haikuArray.map((myLine) => {
    //   console.log("outer test")
    //   this.lineCount = [];
    //   myLine.map((myWord) => {
    //   console.log("inner test")
    //   this.syllableChecker(myWord); 
    //   });
    //   this.totalCount.push(this.lineCount);

  }

  //  working on for loops and holder arrays for syllableChecker

  // // stringBreaker[[" "], [" "], [" "]]
  // // for (syllableChecker[['1','3','2']...]) {
  // solver() {
  // push [[count1],[count2],[count3]];
  //   lineSyllableHolder []
  //   *repeats through for loop*


}



// testArr = [5, 7, 5];