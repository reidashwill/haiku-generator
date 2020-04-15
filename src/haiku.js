export class Haiku {
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  syllableChecker(line1, line2, line3) {
    line1 = line1.toLowerCase();                                     
    if(line1.length <= 3) { return 1; }                            
      line1 = line1.replace(/([^laeiouy]es|ed)$/, ''); 
      line1 = line1.replace(/^y/, '');
      return line1.match(/[aeiouy]{1,2}/g).length;
}