function saudacaoPersonalizada(nome){
    nome = nome || "Visitante";
    return `Olá, ${nome}! Como vai?`
}

let nome = String(prompt('Digite seu nome'));

alert(saudacaoPersonalizada(nome));