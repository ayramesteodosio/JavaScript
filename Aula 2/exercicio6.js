let nome;
let peso;
let altura;

nome = String(prompt("Digite seu nome:"));
peso = Number(prompt("Digite seu peso (em kg):"));
altura = Number(prompt("Digite sua altura (em metros):"));

let imc = peso / (altura * altura);

let confirmar = confirm(`Seus Dados:\nNome: ${nome}\nPeso: ${peso} kg\nAltura: ${altura} m\nDeseja continuar?`);

confirmar 
      ? alert(`${nome}, seu IMC é ${imc.toFixed(2)}`) 
      : alert("Você saiu do programa.");