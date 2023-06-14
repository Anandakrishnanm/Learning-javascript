function randomFraction() {

  console.log("Randum Fraction :",Math.random());

}


function randomWholeNum() {
  console.log("Randum Whole number: ",Math.floor(Math.random()*10));
}


function randomRange(myMin, myMax) {
  console.log("Randum number between ",myMin," and ",myMax," :",Math.floor(Math.random() * (myMax-myMin+1))+myMin);
}

randomFraction();
randomWholeNum();
randomRange(5, 99);