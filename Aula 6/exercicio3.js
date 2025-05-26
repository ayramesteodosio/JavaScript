function explorarObjeto(objeto, operacao) {
    switch (operacao) {
        case "chaves":
            return Object.keys(objeto);
        case "valores":
            return Object.values(objeto);
        case "entradas":
            return Object.entries(objeto);
        default:
            return "Operação inválida.";
    }
};

const pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "Recife"
};

console.log(explorarObjeto(pessoa, "chaves"));
console.log(explorarObjeto(pessoa, "valores"));
console.log(explorarObjeto(pessoa, "entradas"));
console.log(explorarObjeto(pessoa, "teste"));