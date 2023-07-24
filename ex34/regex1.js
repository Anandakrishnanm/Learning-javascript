let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/ig; 
let result = quoteSample.match(myRegex); 