alert("🎮 Bem-vindo ao Jogo da Adivinhação!");

let melhorJogador = "";
let recordeTentativas = Infinity;

let jogarNovamente = "sim";

while (jogarNovamente.toLowerCase() === "sim") {
    const nome = prompt("Qual o seu nome, jogador?");
    alert(`Olá, ${nome}! Preparando o jogo...\nUm número de 1 a 100 foi sorteado!\nTente adivinhar qual é. Boa sorte!`);

    const numeroSecreto = Math.ceil(Math.random() * 100);
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const chute = Number(prompt("Digite um número entre 1 e 100:"));
        tentativas++;

        if (chute === numeroSecreto) {
            acertou = true;
        } else if (chute < numeroSecreto) {
            alert("🔼 O número é maior!");
        } else {
            alert("🔽 O número é menor!");
        }
    }

    // Mensagem de vitória
    alert(`🎉 Parabéns, ${nome}! Você acertou em ${tentativas} tentativa(s).`);

    if (tentativas <= 3) {
        alert("Uau! Você é um gênio da adivinhação! 🧠");
    } else if (tentativas <= 6) {
        alert("Muito bem! Você foi rápido! 🚀");
    } else {
        alert("Conseguiu! Persistência é tudo! 💪");
    }

    // Verifica recorde
    if (tentativas < recordeTentativas) {
        recordeTentativas = tentativas;
        melhorJogador = nome;
        alert(`🏆 Novo recorde! ${nome} é o melhor jogador com ${tentativas} tentativa(s).`);
    }

    jogarNovamente = prompt("Deseja jogar novamente? (sim/não)");
}

if (melhorJogador !== "") {
    alert(`Jogo finalizado!\nMelhor jogador: ${melhorJogador}\nRecorde: ${recordeTentativas} tentativa(s).`);
} else {
    alert("Jogo finalizado! Nenhum jogador bateu o recorde.");
}
