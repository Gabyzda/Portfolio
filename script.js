let usuarios = []; //array que guarda los objetos de personas

function Usuario(nome,sobrenome,email){ // função construtora para recaudar los datos de cada usuario
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email
}
// Para guardar los valores de cada input
let nome = document.querySelector('#input_nome')
let idade = document.querySelector('#input_idade')
let email = document.querySelector('#input_email')