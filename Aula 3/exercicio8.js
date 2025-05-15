const senhaCorreta = "1234";
let senha;

do {
    senha = prompt("Digite a senha:");
    
    if (senha !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente.");
    }

} while (senha !== senhaCorreta);

alert("Acesso liberado.");