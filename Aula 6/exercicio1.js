function criarUsuario(name, age, email) {
    this.name = name,
    this.age = age,
    this.email = email
}

const usuario1 = new criarUsuario("Jorge", 17, "jorginho@hotmail.com");
console.log(usuario1)
const usuario2 = new criarUsuario('Pedro', 25, "pedro.brasinha@gmial.com")
console.log(usuario2)