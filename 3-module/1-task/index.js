function namify(users) {
  let arr = [];
  
  for (let user of users) {
    arr.push(user.name);
  }
  return arr;
}
