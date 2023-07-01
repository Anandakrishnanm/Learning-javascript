function chunkArrayInGroups(arr, size) {
  let newAr = [];
  for(let i = 0; i < arr.length; i= i+size){
    newAr.push(arr.slice(i,i+size));
  }
  return newAr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);