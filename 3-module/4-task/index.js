function showSalary(users, age) {
  
// фильтрация по возрасту

let filtAge = users.filter((user) => {return (user.age <= age)});

// выбрать то, что нужно и добавить перенос строки
  let result = [];

  for (let item of filtAge) {

    if (item == filtAge.at(-1))  { 

     result.push(`${item.name}, ${item.balance}`);
   }

    else {

     result.push(`${item.name}, ${item.balance}\n`);

   }
 };
 
// собрать в строку
  return result.join('');

}
