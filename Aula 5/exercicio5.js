function exibirNomes(nomes) {
    nomes.forEach(function(nome) {
        console.log(`Bem-vindo, ${nome}!`);
    });
}

const nomes = ['Lucas', 'Marina', 'João'];
exibirNomes(nomes);

const nomes2 = ['Ana', 'Pedro'];
exibirNomes(nomes2);