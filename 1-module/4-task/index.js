function checkSpam(str) {
  let lowString = str.toLowerCase();
  let spam1 = '1xBet'.toLowerCase();
  let spam2 = 'XXX'.toLowerCase();
  
   if (lowString.includes(spam1) || lowString.includes(spam2)) {
    
    return true;
    
    } else return false;
}
