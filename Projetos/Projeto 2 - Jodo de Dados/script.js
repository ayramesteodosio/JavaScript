// Função para gerar um número aleatório entre 1 e 6
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para atualizar as imagens dos dados
function atualizarDados(numero1, numero2) {
    document.querySelector('.img1').setAttribute('src', `imagens/dado${numero1}.png`);
    document.querySelector('.img2').setAttribute('src', `imagens/dado${numero2}.png`);
}

// Função para determinar o vencedor
function determinarVencedor(numero1, numero2) {
    const titulo = document.querySelector('h1');
    
    if (numero1 > numero2) {
        titulo.textContent = '🚩 O Jogador 1 Venceu!';
    } else if (numero2 > numero1) {
        titulo.textContent = 'O Jogador 2 Venceu! 🚩';
    } else {
        titulo.textContent = 'Empate!';
    }
}

// Função para jogar o jogo
function jogarDados() {
    const numero1 = gerarNumeroAleatorio();
    const numero2 = gerarNumeroAleatorio();
    
    atualizarDados(numero1, numero2);
    determinarVencedor(numero1, numero2);
}

// Adicionar evento de clique ao botão de novo jogo
document.getElementById('newGameBtn').addEventListener('click', jogarDados);

// Jogar o jogo quando a página carregar
jogarDados(); 