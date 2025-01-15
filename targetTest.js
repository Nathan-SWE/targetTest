/* 
  1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
  Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
  Imprimir(SOMA);
  Ao final do processamento, qual será o valor da variável SOMA?  
*/

console.log("Questão 01");

const indice = 13;
let k = 0;
let soma = 0;

while (k < indice) {
  k++;
  soma++;
}
console.log(`O valor de "soma" é: ${soma}`);

/* 
  2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
  sempre será a soma dos 2 valores Anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
  escreva um programa na linguagem que desejar onde, informado um número, 
  ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

console.log("\nQuestão 02");

const valorDeEntrada = 7;

function verificaFibonacci(valorDeEntrada) {
  if (valorDeEntrada < 0)
    return `${valorDeEntrada} não pertence à sequência de Fibonacci.`;

  const primeiroNum = 0;
  const segundoNum = 1;

  if (valorDeEntrada === primeiroNum || valorDeEntrada === segundoNum)
    return `${valorDeEntrada} pertence à sequência de Fibonacci.`;

  let NumAnterior = primeiroNum;
  let NumAtual = segundoNum;

  while (NumAtual < valorDeEntrada) {
    const proximoNum = NumAnterior + NumAtual;
    NumAnterior = NumAtual;
    NumAtual = proximoNum;

    if (NumAtual === valorDeEntrada) {
      return `${valorDeEntrada} pertence à sequência de Fibonacci.`;
    }
  }

  return `${valorDeEntrada} não pertence à sequência de Fibonacci.`;
}
console.log(verificaFibonacci(valorDeEntrada));

/*
  3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

console.log("\nQuestão 03");

const fs = require("fs");

try {
  const caminhoArquivo = "./baseDeDados/dados.json";
  if (!fs.existsSync(caminhoArquivo)) {
    throw new Error(`Arquivo não encontrado no caminho: ${caminhoArquivo}`);
  }

  const dados = JSON.parse(fs.readFileSync(caminhoArquivo, "utf8"));

  const faturamentoValido = dados.filter((dias) => dias.valor > 0);

  const menorValor = Math.min(...faturamentoValido.map((dias) => dias.valor));
  const maiorValor = Math.max(...faturamentoValido.map((dias) => dias.valor));

  const mediaMensal =
    faturamentoValido.reduce((acc, dias) => acc + dias.valor, 0) /
    faturamentoValido.length;

  const diasAcimaDaMedia = faturamentoValido.filter(
    (dias) => dias.valor > mediaMensal
  ).length;

  console.log(
    `Menor valor de faturamento: R$ ${Number(menorValor.toFixed(2))}`
  );
  console.log(
    `Maior valor de faturamento: R$ ${Number(maiorValor.toFixed(2))}`
  );
  console.log(`Número de dias acima da média mensal: ${diasAcimaDaMedia}`);
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message);
}

/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

console.log("\nQuestão 04");

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentual(faturamento) {
  const totalFaturamento = Object.values(faturamento).reduce(
    (total, valor) => total + valor,
    0
  );

  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / totalFaturamento) * 100;
    console.log(
      `O percentual de ${estado} é ${Number(percentual.toFixed(2))}%`
    );
  }
}

calcularPercentual(faturamento);

/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

console.log("\nQuestão 05");

const minhaString = "Paçoquita";

function inverteString(str) {
  let strInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  return strInvertida;
}
console.log(inverteString(minhaString));
