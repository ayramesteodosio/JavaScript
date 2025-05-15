let N = Number(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}

alert(`A soma dos números pares de 1 até ${N} é: ${soma}`);