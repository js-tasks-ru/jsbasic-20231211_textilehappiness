function initCarousel() {
  
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let carusel = document.querySelector('.carousel__inner');
  
  let count = 0;
  let value = 0;
  
  arrowLeft.style.display = 'none';
  
   
  arrowRight.addEventListener('click', () => {
      
      count++;
       
      value = -carusel.offsetWidth * count + 'px';
      
      carusel.style.transform = `translateX(${value})`; 
      
      
      if (count == 3) {
         
        arrowRight.style.display = 'none';
        

      } else {

        arrowRight.style.display = '';
        
      }
      
     if (count == 1 || count == 2) {

      arrowLeft.style.display = '';

     }
     
    
  });
     

  arrowLeft.addEventListener('click', () => {
    
    
    count--;

    value = -carusel.offsetWidth * count + 'px'; 
    
    carusel.style.transform = `translateX(${value})`; 
   
    
    if (count == 0) {
        
      arrowLeft.style.display = 'none';
      arrowRight.style.display = '';

     } else if (count == 1 || count == 2) {
         
        arrowRight.style.display = '';

     }
  
});

 }

