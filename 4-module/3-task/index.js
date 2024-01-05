function highlight(table) {
    
  for (let i = 1; i < table.rows.length; i++) {
  
  let status = table.rows[i].cells[3];   // положить в переменную значение 4-й ячейки
  
       (status.dataset.available === 'true') ?   // проверка атрибута и назначение класса
        status.parentElement.classList.add('available') :
        status.parentElement.classList.add('unavailable');
  
            
      if (status.dataset.available == null) {  // если атрибута нет, назначить hidden
  
        status.parentElement.hidden = true;
  
      }
  
  let gender = table.rows[i].cells[2];   // положить в переменную значение 3-й ячейки
  
      if (gender.innerHTML == 'm') {     // проверить значение ячейки и назначить класс
  
        gender.parentElement.classList.add('male');
  
      } else if (gender.innerHTML == 'f') {
  
        gender.parentElement.classList.add('female');
  
      }
  
  let age = table.rows[i].cells[1];  // положить в переменную значение 2-й ячейки
  
      if (age.innerHTML < 18) {                // проверить значение ячейки и назначить стиль
  
      age.parentElement.style.textDecoration = 'line-through';
  
      }
    
    }

    return table;
}
