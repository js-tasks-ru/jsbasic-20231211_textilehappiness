function makeDiagonalRed(table) {

// получить доступ к ячейке с помощью цикла и добавить свойство
  for (let i = 0; i < table.rows.length; i++) {
      
    table.rows[i].cells[i].style.backgroundColor = 'red';
      
  }
}
