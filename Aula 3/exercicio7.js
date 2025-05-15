let positivos = 0;
let negativos = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (0 para sair):"));

    if (numero > 0) positivos++;
    else if (numero < 0) negativos++;

} while (numero !== 0);

alert(`Quantidade de números positivos: ${positivos}`);
alert(`Quantidade de números negativos: ${negativos}`);