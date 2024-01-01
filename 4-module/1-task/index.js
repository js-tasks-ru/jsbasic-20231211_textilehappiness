function makeFriendsList(friends) {
  
  let friendsList = document.createElement('UL');

  // добавить в body 'ul'
  document.body.append(friendsList);
  
  // взять из массива объектов, то что нужно и вставить в 'ul', обвернув в 'li'
  friends.forEach( (friend) => {
  
    friendsList.insertAdjacentHTML('beforeEnd',`<li>${friend.firstName} ${friend.lastName}</li>`);
  
   });
  
    return friendsList;
}
