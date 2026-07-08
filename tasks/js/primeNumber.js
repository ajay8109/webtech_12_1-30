for (let num = 1; num <= 50; num++) {
  if (num <= 1) {
    continue;
  }

  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}