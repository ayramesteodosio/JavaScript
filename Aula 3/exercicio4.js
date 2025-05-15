let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

let operacao = Number(prompt("Escolha uma operação: \n\n--- Operações --- \n1 - soma \n2 - subtração \n3 - multiplicação \n4 - divisão \n-----------------"));

switch (operacao) {
    case 1:
        alert(`Resultado da soma: ${n1 + n2}`);
        break;
    case 2:
        alert(`Resultado da subtração: ${n1 - n2}`);
        break;
    case 3:
        alert(`Resultado da multiplicação: ${n1 * n2}`);
        break;
    case 4:
        alert(`Resultado da divisão: ${n1 / n2}`);
        break;
    default:
        alert("Operação inválida!");
}
