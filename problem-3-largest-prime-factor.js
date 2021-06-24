function isPrime(number){
  if(number == 1){
    return false;
  }
  let factors = 0;
  for(let i=0;i<=number;i++){
    if(number%i==0){
      factors += 1;
    }
  }
  if(factors==2){
    return true;
  }
  return false;
}

function largestPrimeFactor(number) {
  let half = number/2;
  if(isPrime(number)){
    return number;
  }
  else if(half == Math.trunc(half) && isPrime(half)){
    return half;
  }
  let prime = -1;
  for(let i=0;i<Math.trunc(half);i++){
    if( number%i == 0 && isPrime(i) ){
      prime = i;
    }
  }
  return prime;
}

largestPrimeFactor(13195);