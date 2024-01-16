/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  
  constructor(rows) {
    this.rows = rows;
    this.elem = rows;
    this.render();
  }  
  
  render() {

    this.elem = document.createElement('TABLE');
    let tbody = document.createElement('TBODY');
    
    this.rows.forEach( (row) => {
  
      this.rows = document.createElement('TR');
  
      for(let key in row) {
  
        this.rows.insertAdjacentHTML('beforeEnd', `<td>${row[key]}</td>`);
   
      }
  
      this.rows.insertAdjacentHTML('beforeEnd', `<td><button>X</button></td>`);
  
      tbody.appendChild(this.rows);
      this.elem.appendChild(tbody);  
  
    });
    
    this.addEventListeners();

      return this.elem;

  }
  
  addEventListeners() {

    this.elem.addEventListener('click', this.onClick);

    }
  
  onClick = (event) => {

    let button = event.target.closest('button');

      if (button) {

        button.parentElement.parentElement.remove();

      }
    }
  
}
