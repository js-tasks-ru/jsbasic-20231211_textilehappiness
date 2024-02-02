import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
  }

  render() {
    // отрисовка
    this.elem = createElement(`<div class="slider"></div>`);
    let sliderThumb = createElement(`<div class="slider__thumb" style="left: 0%;"><span class="slider__value">0</span></div>`);
    let sliderProgress = createElement(`<div class="slider__progress" style="width: 0%;"></div>`);
    let sliderSteps = createElement(`<div class="slider__steps">`);
    
    for(let i = 0; i < this.steps; i++) {

      let step = document.createElement('span');
      sliderSteps.append(step);
    }
    
    sliderSteps.firstElementChild.classList.add('slider__step-active'); // добавить класс первому span

    this.elem.append(sliderThumb, sliderProgress, sliderSteps); // добавить в корневой элемент ползунок, прогресс и шаги

    this.addEventListeners();

    return this.elem;

  }

  addEventListeners() {
    
    this.elem.addEventListener('click', this.onClick);
    
  }

  onClick = (event) => {
       
    let steps = this.elem.lastElementChild.querySelectorAll('span');
    let target = event.target.closest('.slider');
    
    if (target) {
      
      let left = event.clientX - this.elem.getBoundingClientRect().left; // расчет из условий задачи
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      let valuePercents = this.value / segments * 100;
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
    
      this.elem.querySelector('.slider__value').innerHTML = this.value; // добавить текущее значение
      
      for (let step of steps) {
          
        if ( step.classList.contains('slider__step-active') ) {
          
          step.classList.remove('slider__step-active'); // снять класс у предыдущего span
          
        }

      }
      
      steps[this.value].classList.add('slider__step-active'); // добавить класс в span

      thumb.style.left = `${valuePercents}%`; // подвинуть ползунок
      progress.style.width = `${valuePercents}%`; // покрасить прогресс 
       
      let change = new CustomEvent('slider-change', { // генерация customevent при изменении значения слайдера
          detail: this.value, 
          bubbles: true 
       });

      this.elem.dispatchEvent(change);     
    }
      
  }
        
}
     

