
    const min = 0;
    const max = 9999;
    let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;

    // 1. Mostrar saudação
    function dizerOla() {
      const nome = document.getElementById("nome").value;
      const ola = document.getElementById("ola");

      if (nome === "") {
        ola.textContent = "Por favor, digite seu nome.";
      } else {
        ola.textContent = "Olá, " + nome + "!";
      }
    }

    // 2. Verificar chute do usuário
    function registrarNumero() {
      const chute = parseInt(document.getElementById("chute").value);
      const resposta = document.getElementById("respostaChute");

      if (isNaN(chute) || chute < min || chute > max) {
        resposta.textContent = "Número inválido. Digite entre 0 e 9999.";
        return;
      }

      if (chute === numeroSecreto) {
        resposta.textContent = "Parabéns! Você acertou o número secreto!";
      } else {
        resposta.textContent = "Você errou. Tente novamente!";
      }
    }

    // 3. Mostrar a soma como dica
    function executarSoma() {
      const chute = parseInt(document.getElementById("chute").value);
      const resposta = document.getElementById("respostaSoma");

      if (isNaN(chute) || chute < min || chute > max) {
        resposta.textContent = "Digite um número válido antes de somar.";
        return;
      }

      const soma = chute + numeroSecreto;
      resposta.textContent = "Dica: seu chute + número secreto = " + soma;
    }

