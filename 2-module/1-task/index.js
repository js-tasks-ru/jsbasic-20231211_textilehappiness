function sumSalary(salaries) {
  let result = 0;
  
  for (let key in salaries) {
    Number.isFinite(salaries[key]) ? result += salaries[key] : 0;
    } 
    return result;
}
