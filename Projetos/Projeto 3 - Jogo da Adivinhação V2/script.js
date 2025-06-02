// Seleção dos elementos HTML
const inicio = document.getElementById('inicio');
const jogo = document.getElementById('jogo');
const fim = document.getElementById('fim');
const nomeInput = document.getElementById('nome');
const palpiteInput = document.getElementById('palpite');
const boasVindas = document.getElementById('boasVindas');
const mensagem = document.getElementById('mensagem');
const resultado = document.getElementById('resultado');
const recorde = document.getElementById('recorde');

// Botões
const comecarBtn = document.getElementById('comecarBtn');
const tentarBtn = document.getElementById('tentarBtn');
const jogarNovamenteBtn = document.getElementById('jogarNovamenteBtn');

// Variáveis globais
let numeroSorteado;
let tentativas;
let nomeJogador;
let melhorJogador = localStorage.getItem('melhorJogador') || '-';
let melhorPontuacao = localStorage.getItem('melhorPontuacao') || Infinity;

// Atualizar o recorde na tela
function atualizarRecorde() {
    recorde.textContent = `🏅 Melhor jogador: ${melhorJogador}`;
}

// Iniciar o jogo
function iniciarJogo() {
    nomeJogador = nomeInput.value.trim();
    
    if (nomeJogador === '') {
        alert('Por favor, digite seu nome!');
        return;
    }

    // Configurar o jogo
    numeroSorteado = Math.ceil(Math.random() * 100);
    tentativas = 0;
    palpiteInput.value = '';
    mensagem.textContent = '';
    
    // Atualizar interface
    boasVindas.textContent = `Olá, ${nomeJogador}! Vamos começar!`;
    inicio.classList.add('hidden');
    jogo.classList.remove('hidden');
    fim.classList.add('hidden');
}

// Verificar o palpite
function verificarPalpite() {
    const palpite = parseInt(palpiteInput.value);
    
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = 'Por favor, digite um número entre 1 e 100!';
        return;
    }

    tentativas++;

    if (palpite === numeroSorteado) {
        finalizarJogo();
    } else if (palpite < numeroSorteado) {
        mensagem.textContent = '📈 O número é maior!';
    } else {
        mensagem.textContent = '📉 O número é menor!';
    }
}

// Finalizar o jogo
function finalizarJogo() {
    let mensagemDesempenho;
    
    if (tentativas < 3) {
        mensagemDesempenho = '🧠 Gênio da adivinhação!';
    } else if (tentativas <= 6) {
        mensagemDesempenho = '🚀 Muito bem!';
    } else {
        mensagemDesempenho = '💪 Persistência é tudo!';
    }

    // Verificar recorde
    if (tentativas < melhorPontuacao) {
        melhorJogador = nomeJogador;
        melhorPontuacao = tentativas;
        localStorage.setItem('melhorJogador', melhorJogador);
        localStorage.setItem('melhorPontuacao', melhorPontuacao);
        atualizarRecorde();
    }

    resultado.textContent = `${mensagemDesempenho}\nVocê acertou em ${tentativas} tentativa(s)!`;
    jogo.classList.add('hidden');
    fim.classList.remove('hidden');
}

// Reiniciar o jogo
function reiniciarJogo() {
    inicio.classList.remove('hidden');
    fim.classList.add('hidden');
    nomeInput.value = '';
}

// Event Listeners
comecarBtn.addEventListener('click', iniciarJogo);
tentarBtn.addEventListener('click', verificarPalpite);
jogarNovamenteBtn.addEventListener('click', reiniciarJogo);

// Permitir usar Enter para tentar
palpiteInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarPalpite();
    }
});

// Inicializar o recorde
atualizarRecorde(); 