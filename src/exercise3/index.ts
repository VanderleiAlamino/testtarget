import * as fs from 'fs';
import { colorize } from '../utils/colorize'; 

function calcularFaturamento() {
  const data = fs.readFileSync('./src/exercise3/data.json', 'utf-8');
  const faturamentoDiario = JSON.parse(data).faturamento_diario;

  let menorFaturamento = Number.MAX_VALUE;
  let maiorFaturamento = Number.MIN_VALUE;
  let totalFaturamento = 0;
  let diasComFaturamento = 0;

  faturamentoDiario.forEach((registro: { dia: number, faturamento: number }) => {
    const faturamento = registro.faturamento;
    
    if (faturamento > 0) {
      totalFaturamento += faturamento;
      diasComFaturamento++;
      
      if (faturamento < menorFaturamento) {
        menorFaturamento = faturamento;
      }
      
      if (faturamento > maiorFaturamento) {
        maiorFaturamento = faturamento;
      }
    }
  });

  const mediaMensal = totalFaturamento / diasComFaturamento;

  let diasAcimaDaMedia = 0;
  faturamentoDiario.forEach((registro: { dia: number, faturamento: number }) => {
    if (registro.faturamento > mediaMensal) {
      diasAcimaDaMedia++;
    }
  });
  console.log(colorize(`EXERCÍCIO 3:`, 'blue'));
  console.log(colorize(`Menor faturamento do mês: R$ ${menorFaturamento}`, 'blue'));
  console.log(colorize(`Maior faturamento do mês: R$ ${maiorFaturamento}`, 'green'));
  console.log(colorize(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`, 'yellow'));
}

calcularFaturamento();
