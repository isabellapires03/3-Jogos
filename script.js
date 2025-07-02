    const min = 0;
    const max = 9999;
    let numero = novoNumero(); // número secreto gerado ao carregar
    let soma;

    function dizerOla() {
      let nome = document.getElementById("nome").value;
      let ola = document.getElementById("ola");
      let resultado = document.getElementById("resultadoNome");

      if (nome === "") {
        resultado.textContent = "Por favor, digite seu nome.";
      } else {
        ola.textContent = "Olá, " + nome + "!";
        resultado.textContent = "Nome registrado com sucesso!";
      }
    }

    // 2. Adivinhar o número secreto
    function acertarNumero() {
      let chute = parseInt(document.getElementById("chute").value);
      let resultado = document.getElementById("resultadoChute");

      if (isNaN(chute) || chute < min || chute > max) {
        resultado.textContent = "O seu chute é um número inválido!";
        return;
      }

      if (chute === numero) {
        resultado.textContent = `Parabéns! Você acertou! O número secreto era ${numero}!`;
        numero = novoNumero(); // Gera um novo número secreto
      } else if (chute > numero) {
        resultado.textContent = `Seu chute foi ${chute}. O número secreto é menor!`;
      } else {
        resultado.textContent = `Seu chute foi ${chute}. O número secreto é maior!`;
      }
    }

  
    function novoNumero() {
      return getRandomIntInclusive(min, max);
    }

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  
    function somaNumeros() {
      let chute = parseInt(document.getElementById("chute").value);
      let resultado = document.getElementById("resultadoSoma");

      if (isNaN(chute) || chute < min || chute > max) {
        resultado.textContent = "Digite um número válido primeiro no jogo de adivinhação.";
        return;
      }

      soma = chute + numero;
      resultado.textContent = `Dica: ${chute} + número secreto = ${soma}`;
    }