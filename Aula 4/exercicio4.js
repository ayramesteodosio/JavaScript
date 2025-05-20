const mensagemDeBoasVindas = function(nome) {
    const hora = new Date().getHours();

    if (hora >= 6 && hora <= 11) {
        alert(`Bom dia, ${nome}!`);
    } else if (hora >= 12 && hora <= 17) {
        alert(`Boa tarde, ${nome}!`);
    } else if (hora >= 18 && hora <= 23) {
        alert(`Boa noite, ${nome}!`);
    } else {
        alert(`Olá, ${nome}!`);
    }
};

const nomeUsuario = prompt("Digite seu nome:");
mensagemDeBoasVindas(nomeUsuario);