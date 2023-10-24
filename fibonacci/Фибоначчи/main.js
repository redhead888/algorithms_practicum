function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

function fibonacciLoop(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return n === 0 ? a : b;
}

function fibonacciArray(n) {
  const fib = [0, 1];
  let i = 2;
  while (true) {
    const nextFib = fib[i - 1] + fib[i - 2];
    if (nextFib <= n) {
      fib.push(nextFib);
      i++;
    } else {
      break;
    }
  }
  return fib;
}

function fibonacciBinet(n) {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  return Math.round((Math.pow(phi, n) - Math.pow(1 - phi, n)) / sqrt5);
}

function isEvenFibonacci(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return b % 2 === 0 ? 'even' : 'odd';
}

document.getElementById('calculateButton').addEventListener('click', function () {
  const n = document.getElementById('nInput').value;
  const startTime = performance.now();

  setTimeout(function () {

  const endTime = performance.now();
  const duration = endTime - startTime;

  document.getElementById('executionTime').textContent = `Время выполнения: ${duration.toFixed(2)} миллисекунд`;
}, 10); 
});