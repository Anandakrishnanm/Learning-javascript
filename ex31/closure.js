function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  }

};

(function () {
  console.log("A cozy nest is ready");
}) ();
