function fiboEvenSum(n) {

  let sum = 0;
  let previous = 1;
  let next = 2;
  while (previous < n) {
    if (next%2==0) {
      sum += next;
    }
    let hold = next;
    next = previous + next;
    previous = hold;
  }


  return sum;
}