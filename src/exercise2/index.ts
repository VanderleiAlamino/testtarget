import * as readlineSync from 'readline-sync';
import { colorize } from '../utils/colorize';

function fibonacci(n: number): boolean {
  let a = 0, b = 1;

  if (n === a || n === b) {
    return true;
  }

  while (b < n) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b === n;
}

const numberToCheck = readlineSync.questionInt(colorize("EXERCICIO 2: Digite um numero para verificar se ele pertence a sequencia de Fibonacci: ", 'cyan'));

if (fibonacci(numberToCheck)) {
  console.log(colorize(`EXERCÍCIO 2: ${numberToCheck} EH Fibonacci.`, 'green'));
} else {
  console.log(colorize(`EXERCÍCIO 2: ${numberToCheck} NÃO eh Fibonacci.`, 'red'));
}
