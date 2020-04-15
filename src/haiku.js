export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  testFunction() {
    this.line1.forEach(function() {
      this.syllableChecker(this.line1);
    });
  }

  // stringBreaker() {
  //   var haikuArr = [this.line1, this.line2, this.line3];
  //   haikuArr[0].forEach(function(){
      
      
  //   })
  //   var newArray = [];
  //   for (let i = 0; i < haikuArr.length; i++){
  //     newArray.push(haikuArr[i].split(" "));
  //    }
  //   return newArray;
  // }
  
  syllableChecker(){
    // stringBreaker(line1, line2, line3);
    // for(let i = 0; i < newArray.length; i ++) {
    //   for(let i =0; i < newArray[i].length; i++){
        // let word = newArray[i].toLowerCase();  
        if(this.line1.length <= 3) { 
          return 1; //ether
        }else{
          this.line1 = this.line1.replace(/([^laeiouy]es|ed)$/i, '');
          this.line1 = this.line1.replace(/([.!?:;])$/i, '');
          this.line1 = this.line1.replace(/^y/i, '');
          return this.line1.match(/[aeiouy]{1,2}/gi).length; 
        }
  }
};