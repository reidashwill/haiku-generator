export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }


  stringBreaker() {
    var haikuArr = [this.line1, this.line2, this.line3];
    // haikuArr[0].forEach(function(){
      
      
    // })
    var newArray = [];
    for (let i = 0; i < haikuArr.length; i++){
      newArray.push(haikuArr[i].split(" "));
     }
    return newArray;
  }
  
  syllableChecker(passedWord){
    let word = passedWord.toLowerCase();  
    if(word.length <= 3) { 
      return 1; //ether
    }else{
      word = word.replace(/([^laeiouy]es|ed)$/i, '');
      word = word.replace(/([.!?:;])$/i, '');
      word = word.replace(/^y/i, '');
      return word.match(/[aeiouy]{1,2}/gi).length; 
    }
  }
};