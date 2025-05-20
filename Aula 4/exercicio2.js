function verificaIdade(nome, idade){
    if (idade >= 120 || idade < 0) {
        return alert("Idade inválida")
    } else if (idade >= 18 && idade <= 119){
        return alert(`Olá, ${nome}! Você é maior de idade.`)
    }
    else {
        return alert(`Olá, ${nome}! Você é menor de idade.`)
    }
};

while(confirm(`Você deseja verificar uma idade?`)){
    let nome = String(prompt(`Informe o nome:`))
    let idade = Number(prompt(`Infome a idade:`))
    verificaIdade(nome, idade)
}