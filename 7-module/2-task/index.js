import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    this.onKeydown();
  }

  render() {
    // отрисовка
    this.elem = createElement(`<div class="modal"></div>`);
    let modalOverlay = createElement(`<div class="modal__overlay"></div>`);
    let modalInner = createElement(`
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body"></div>
      </div>`
    );
    
    this.elem.append(modalOverlay, modalInner); // добавить в корневой элемент подложку и modalInner

    this.addEventListeners();

    return this.elem;
    
  }

  addEventListeners() {
    
    this.elem.addEventListener('click', this.onClick);
    this.elem.addEventListener('keydown', this.onKeydown);

  }

  //открыть окно
  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }

  // установить заголовок окна
  setTitle(modalTitle) {
    this.elem.lastElementChild.querySelector('.modal__title').innerHTML = modalTitle;
  }

  // добавить тело в окно
  setBody(modalBody) {
    this.elem.lastElementChild.querySelector('.modal__body').append(modalBody);
  }

  // закрытие модального окна методом
  
  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    this.elem.removeEventListener('keydown', this.onKeydown); // удалить обработчик события keydown
  }

  //закрытие модального окна кликом по кнопке Х
  
  onClick = (event) => {
    
    let closeButton = event.target.closest('.modal__close');

    if (closeButton) {

      this.elem.remove();
      document.body.classList.remove('is-modal-open');
      this.elem.removeEventListener('keydown', this.onKeydown); // удалить обработчик события keydown

    }

  }

  //закрытие модального окна нажатием ESC

  onKeydown = (event) => {
    
    document.addEventListener('keydown', (event) => {
      
      if (event.code === 'Escape') {
        
        this.elem.remove();
        document.body.classList.remove('is-modal-open');
        this.elem.removeEventListener('keydown', this.onKeydown); // удалить обработчик события keydown

      }

    });

  }
    
}
