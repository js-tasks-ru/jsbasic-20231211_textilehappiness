function toggleText() {
  
  let button = document.querySelector('.toggle-text-button');
  let div = document.getElementById('text');

    button.addEventListener('click', () => {

      if (div.hidden === false) {

        div.hidden = true;

    } else if (div.hidden === true) {

        div.hidden = false;
    }

  });
}
