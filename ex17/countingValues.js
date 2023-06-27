const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  
    let count =0;
    for(const name in allUsers){
      
      if(allUsers[name].online === true){
        count++;
      }
    }
    return count;
}

console.log(countOnline(users));