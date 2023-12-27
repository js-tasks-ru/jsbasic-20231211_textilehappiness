function camelize(str) {
   // порезать строку на части

 let arr = str.split('-');

  // преобразование элементов
    
  let result = arr.map((item, index, arr) => { 
    
   if (index === 0) {
    
     return arr[0];
    
  }  else return arr[index][0].toUpperCase() + arr[index].slice(1);
        
  }); 
  
 // собрать все в строку 
   
  return result.join('');
}
