const min = 0;
const max = 9999;
let chute;
let soma;
let numero;
let nome = document.getElementById("nome");
ola = document.getElementById("demo");
ola.textContent = "Olá, " + nome + "!";
entrada.addEventListener('input', () => {
let texto = entrada.value;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function novoNumero(numero){
  numero = getRandomIntInclusive(min, max);
  return numero;
}

function exceptionNumeroInvalido(chute){
  if (chute <0 || chute >9999){
    prompt("O seu chute é um número inválido!");
  }
}

function somaNumeros(chute, numero){
  soma = chute + numero;
  return soma;
}


