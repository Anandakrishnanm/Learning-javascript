class Vegetable {
  constructor (name){
    this.name=name;
  }

  get Vegie(){
    return this.name;
  }

  set Vegie(updatedName) {
    this.name = updatedName;
  }
}


const carrot = new Vegetable('carrot');
console.log(carrot.Vegie); 
carrot.Vegie = 'Beetroot';
console.log('updated : ' , carrot.Vegie); 