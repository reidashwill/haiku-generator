export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  stringBreaker(line1, line2, line3) {
    var haikuArr = [this.line1, this.line2, this.line3];
    var newArray = [];
    // let i = 0;
    for (let i = 0; i < haikuArr.length; i++){
      newArray.push(haikuArr[i].split(" "));
     }
    return newArray.length;
  }
  
};
  // syllableChecker(word) {
  //   let word = someIndexOfArr.toLowerCase();                                     
  //   if(word.length <= 3) { 
  //     return 1; 
  //   }else{
  //   word = word.replace(/([^laeiouy]es|ed)$/, '');
  //   word = word.replace(/([.!?:;])$/, '');
  //   word = word.replace(/^y/, '');
  //   return word.match(/[aeiouy]{1,2}/g).length; 
  //   }
  // }

//   stringBreaker(line1, line2, line3) {
//     let line1Arr = this.line1.split(" "); 
//     let line2Arr = this.line2.split(" ");
//     let line3Arr = this.line3.split(" ");
//       console.log(line1Arr)
//     return line1Arr.length, line2Arr.length, line3Arr.length;

//   }
