let num1;
let num2;
let operador;

function calcular(num1, num2, operador){
    num1 = isNaN(num1) ? 0 : num1;
    num2 = isNaN(num2) ? 0 : num2;

    switch(operador){
        case "+" || "soma":
            alert(`Resultado da soma: ${num1 + num2}`);
        case "-" || "subtração":
            alert(`Resultado da subtração: ${num1 - num2}`);
        case "*" || "x" || "multiplicação":
            alert(`Resultado da multiplicação: ${num1 * num2}`);
        case "/" || "divisão":
            alert(`Resultado da divisão: ${num1 / num2}`);
        default:
            alert("Operação inválida!");
        }
}

while(confirm("Quer fazer uma conta?")) {
    num1 = Number(prompt('Informe o primeiro número:'))
    num2 = Number(prompt('Informe o segundo número:'))
    operdaor = String(prompt('Escolha uma operação: \n\n--- Operações --- \n+ - soma \n- - subtração \n* - multiplicação \n/ - divisão \n-----------------'))
    calcular(num1, num2, operador)
}