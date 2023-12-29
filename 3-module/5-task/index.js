function getMinMax(str) {
  
// порезать строку

  let arr = str.split(' ');

// cделать новый массив из чисел

  arr = arr.filter((item) => +item);

// сортировка по возрастанию

  arr = arr.sort( (a, b) => a - b);

//положить в объект минимальное и максимальное значение

  let result = {
    
    min: +arr[0],
    max: +arr.at(-1)

};

  return result;

}
