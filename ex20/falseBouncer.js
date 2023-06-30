function bouncer(arr) {
  let newArr= [];
  for(let i in arr){
    if(arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);