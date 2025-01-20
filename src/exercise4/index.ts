import { colorize } from '../utils/colorize';

const faturamento: { [key: string]: number } = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, value) => acc + value, 0);

for (const estado in faturamento) {
    const percentual = (faturamento[estado as keyof typeof faturamento] / totalFaturamento) * 100;
    console.log(`${colorize('EXERCÍCIO 4: ' + estado, 'cyan')}: ${colorize(percentual.toFixed(2) + '%', 'green')}`);
}
