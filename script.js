let usuarios = []; //array que guarda los objetos de personas

function Usuario(nome,sobrenome,email){ // função construtora para recaudar los datos de cada usuario
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email
}