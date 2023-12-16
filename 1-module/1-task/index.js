function factorial(n) {
  let result = n;
  let i = 1;
  while (i < n) {
    result *= (n - i);
    i++;
  }
  if (n === 0 || n === 1) {
  return 1;
  }
  return result;
}
