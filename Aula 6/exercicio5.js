function protegerObjeto(objeto, modo) {
    switch (modo) {
        case "extensivel":
            Object.preventExtensions(objeto);
            break;
        case "selado":
            Object.seal(objeto);
            break;
        case "congelado":
            Object.freeze(objeto);
            break;
        default:
            console.log("Modo inválido.");
            return;
    }

    const resultado = {
        extensivel: Object.isExtensible(objeto),
        selado: Object.isSealed(objeto),
        congelado: Object.isFrozen(objeto)
    };

    return resultado;
}

const produto = { nome: "Câmera", preco: 1200 };

const resultado = protegerObjeto(produto, "congelado");

console.log(resultado);