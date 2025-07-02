const min = 0;
const max = 9999;
let numeroSecreto = null;


function saudarUsuario() {
    const nome = document.getElementById("nome").value;
    const demo = document.getElementById("demo");

    if (nome.trim() === "") {
        demo.textContent = "Por favor, digite seu nome.";
    } else {
        demo.textContent = "Olá, " + nome + "!";
    }
}

function gerarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("aviso").textContent = "Número secreto gerado com sucesso!";
    console.log("Número secreto:", numeroSecreto); // apenas para testes
}


function tentarAdivinhar() {
    const chute = parseInt(document.getElementById("chute").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(chute) || chute < min || chute > max) {
        resultado.textContent = "Número inválido. Digite entre 0 e 9999.";
        return;
    }

    if (numeroSecreto === null) {
        resultado.textContent = "Gere o número secreto antes de chutar!";
        return;
    }

    if (chute === numeroSecreto) {
        resultado.textContent = "Parabéns! Você acertou o número secreto!";
    } else {
        const dica = chute + numeroSecreto;
        resultado.textContent = `Você errou! Dica: a soma do seu chute com o número secreto é ${dica}.`;
    }
}
