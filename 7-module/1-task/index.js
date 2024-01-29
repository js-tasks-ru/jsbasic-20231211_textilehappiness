import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = categories;
    this.render();
    
  }

  render() {
    // отрисовка
    this.elem = createElement(`<div class="ribbon"></div>`);
    let ribbonInner = createElement(`<nav class="ribbon__inner"></nav>`);
    let buttonLeft = createElement(`<button class="ribbon__arrow ribbon__arrow_left">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`);
    let buttonRight = createElement(`<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`);
    
    for (let category of this.categories) { // пройти по массиву и взять свойства для ссылок

      let menuLink = createElement(`<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`);

      ribbonInner.append(menuLink); // добавить в ленту ссылки
    }

    this.elem.append(buttonLeft, ribbonInner, buttonRight); // добавить в корневой элемент кнопки и ленту

    ribbonInner.firstElementChild.classList.add('ribbon__item_active'); // добавить первой ссылке класс
    
    this.addEventListeners(); 
    
    return this.elem;

  }

  addEventListeners() {
    
    this.elem.addEventListener('click', this.onClick); 
      
  }

  onClick = (event) => {  

    let menuLink = event.target.closest('a'); // обозначить элемент, на котором происходит событие
    
    if (menuLink) {
      
      event.preventDefault(); // остановить действие браузера по умолчанию
      
      // выделить ссылку
      let navigationMenu = this.elem.querySelector('nav')
      let categorieLink = navigationMenu.querySelectorAll('a');
      
      for (let item of categorieLink) {  // проверить ссылки на наличие класса
        
        if ( item.classList.contains('ribbon__item_active') ) {

          item.classList.remove('ribbon__item_active'); // убрать класс active

        }

      }
      
      menuLink.classList.add('ribbon__item_active'); // добавить класс active
      
      // генерировать customevent
      let eventSelect = new CustomEvent('ribbon-select', { 
        detail: menuLink.dataset.id, // id ссылки
        bubbles: true,
        });
        
      this.elem.dispatchEvent(eventSelect);
      
    }
  
    // прокрутка
      
    let buttonLeft = event.target.closest('.ribbon__arrow_left'); // обозначить элемент, на котором происходит событие
    let buttonRight = event.target.closest('.ribbon__arrow_right');
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
 
      if (buttonLeft) {
      
        ribbonInner.scrollBy(-350, 0); // прокрутка налево
        
      } else if (buttonRight) {

        ribbonInner.scrollBy(350, 0); // прокрутка направо
        
      }
    
      // скрывать и показывать кнопки
    
    ribbonInner.addEventListener('scroll', () => { // обработчик события scroll на элементе с классом ribbon__inner
      
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      scrollLeft == 0 ? this.elem.firstElementChild.classList.remove('ribbon__arrow_visible') // скрыть левую кнопку 
                      : this.elem.firstElementChild.classList.add('ribbon__arrow_visible');
            
      scrollRight < 1 ? this.elem.lastElementChild.classList.remove('ribbon__arrow_visible') // скрыть правую кнопку 
                      : this.elem.lastElementChild.classList.add('ribbon__arrow_visible'); 
           
    });

  }
  
}
