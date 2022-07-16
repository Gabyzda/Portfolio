 //array que guarda los objetos de personas
let usuarios = [];

// função construtora para recaudar los datos de cada usuario
function Usuario(nome,sobrenome,email){ 
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email
}
// Para guardar los valores de cada input
let nome = document.querySelector('#input_nome')
let idade = document.querySelector('#input_idade')
let email = document.querySelector('#input_email')

// funcion para guardar registro
function AddRegistroNovo(){ 
    let nomeUsuario = nome.value;
    let sobrenomeUsuario = idade.value;
    let emailUsuario = email.value;
    let usuario = new Usuario(nomeUsuario,sobrenomeUsuario,emailUsuario)
    usuarios.push(usuario);
}