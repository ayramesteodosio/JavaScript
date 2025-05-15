let peso = Number(prompt("Digite seu peso (kg):"));
let altura = Number(prompt("Digite sua altura (m):"));

let imc = peso / (altura * altura);

alert(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    alert("Abaixo do peso");
} else if (imc < 25) {
    alert("Peso normal");
} else if (imc < 30) {
    alert("Sobrepeso");
} else if (imc < 35) {
    alert("Obesidade grau 1");
} else if (imc < 40) {
    alert("Obesidade grau 2");
} else {
    alert("Obesidade grau 3");
}