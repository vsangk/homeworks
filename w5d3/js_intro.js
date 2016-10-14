// Phase 1 - JS Fundamentals

function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.uppercase} the
    ${adjective.uppercase} ${noun.uppercase}`);
}

function isSubstring(searchString, subString) {
  let search = searchString.split(" ");
  if (search.includes(subString)) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(array) {
  let result = [];

  for(let i = 0; i < array.length; i++) {
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
      continue;
    } else if ((array[i] % 3 === 0) || (array[i] % 5 === 0)) {
      result.push(array[i]);
    }
  }

  return result;
}

function isPrime(number) {
  let posPrime = number - 1;

  while (posPrime > 1) {
    if (number % posPrime === 0) {
      return false;
    }
    posPrime--;
  }

  return true;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let posPrime = 2;

  while (n > 0) {
    if (isPrime(posPrime)) {
      sum += posPrime;
      n--;
    }
    posPrime++;
  }

  return sum;
}

function allOrNothing(mod, ...args) {
  args.forEach(num => {
    if (num % mod !== 0) {
      return false;
    }
  });

  return true;
}
