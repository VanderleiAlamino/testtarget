import * as readlineSync from 'readline-sync';
import { colorize } from '../utils/colorize'; // Importando a função colorize

function inverterString(str: string): string {
  let resultado = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }

  return resultado;
}

const stringOriginal = readlineSync.question(colorize(`EXERCICIO 5: Digite uma string para inverter:`, 'red'));
const stringInvertida = inverterString(stringOriginal);

console.log(colorize(`EXERCÍCIO 5: String Original: ${stringOriginal}`, 'cyan'));
console.log(colorize(`EXERCÍCIO 5: String Invertida: ${stringInvertida}`, 'magenta'));
