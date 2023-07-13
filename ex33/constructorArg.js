function Dog(name,color) {
  this.name = name;
  this.color = color;

}
Dog.prototype.numLegs = 4;
let terrier = new Dog('soike','black');
terrier instanceof Dog;