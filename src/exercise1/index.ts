import { colorize } from '../utils/colorize';

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(colorize(`EXERCÍCIO 1: RESULTADO DA SOMA EH: ${SOMA}`, 'yellow'));
