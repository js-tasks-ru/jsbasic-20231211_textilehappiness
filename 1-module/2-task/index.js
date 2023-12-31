/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (
    name !== null && // не пустое
    !name.includes(' ') &&  // без пробелов
    name.length >= 4 // минимум 4 символа
      ) { 
    return true;
  } 
    else {
      return false;
        }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
