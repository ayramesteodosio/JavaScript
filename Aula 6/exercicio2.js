const usuario = { 
    nome: "Marcos", 
    idade: 19, 
    email: "marquinhos@hotmail.com" 
};

class atualizarIdade{
    constructor(usuario, novaIdade) {
        usuario.idade = novaIdade
    }
}

new atualizarIdade(usuario, 25);

console.log(usuario.idade);