import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = slides;
    this.currentSlideNumber = 0;
    this.render();
  }

  render() {

    this.elem = createElement(` <div class="carousel"></div> `);
    let arrowLeft = createElement(` <div class="carousel__arrow carousel__arrow_left"><img src="/assets/images/icons/angle-left-icon.svg" alt="icon"></div> `);
    let arrowRight = createElement(` <div class="carousel__arrow carousel__arrow_right"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></div> `);
    let carouselInner = createElement(` <div class="carousel__inner"></div> `) 
  
    this.slides.forEach( (slide) => {
 
      let carouselSlide = createElement(`

        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>

     `)

      carouselInner.append(carouselSlide);
      arrowLeft.style.display = 'none'; // скрыть стрелку "назад"

    });
    
    this.elem.append(arrowRight, arrowLeft, carouselInner);
   

    this.addEventListeners();
    
      return this.elem;
    
  }
    
  addEventListeners() {
    
    this.elem.addEventListener('click', this.onClick);
    this.elem.addEventListener('click', this.onShift);

  }
      
  onClick = (event) => {
    
    let button = event.target.closest('.carousel__button');
    
      if (button) {
    
        let eventProductAdd = new CustomEvent('product-add', {
            
          detail: button.parentElement.parentElement.dataset.id,
          bubbles: true

        });
        
        this.elem.dispatchEvent(eventProductAdd);
         
      }
      
  }
    
  onShift = (event) => {
    
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let RightShift = event.target.closest('.carousel__arrow_right');
    let LeftShift = event.target.closest('.carousel__arrow_left');
      

    if (RightShift) {
      
      this.currentSlideNumber++; // Если вправо, то увеличили счётчик
      
      let offset = -this.elem.offsetWidth * this.currentSlideNumber;
     
      carouselInner.style.transform = `translateX(${offset}px)`;

      this.elem.querySelector('.carousel__arrow_left').style.display = ''; // показать стрелку "назад"
      
      if (this.currentSlideNumber == this.slides.length - 1) {  // скрыть стрелку "вперед", если слайд последний

        RightShift.style.display = 'none';

      } else {

        RightShift.style.display = '';

      }
            
    }  
       
    if (LeftShift) {
      
     this.currentSlideNumber--; // Если влево, то уменьшили счётчик

     let offset = -this.elem.offsetWidth * this.currentSlideNumber;

     carouselInner.style.transform = `translateX(${offset}px)`;
      
      this.elem.querySelector('.carousel__arrow_right').style.display = ''; // показать стрелку "вперед"
            
      if (this.currentSlideNumber == 0) {  // скрыть стрелку "назад", если слайд первый

        LeftShift.style.display = 'none';

      } else {

        LeftShift.style.display = '';

      }

    }
     
  }
}
