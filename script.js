 //array que guarda los objetos de personas
 let usuarios = [];

 // función construtora para recaudar los datos de cada usuario
 function Usuario(nome, sobrenome, email) {
     this.nome = nome;
     this.sobrenome = sobrenome;
     this.email = email
 }
 // Para guardar los valores de cada input
 let nome = document.querySelector('#input_nome')
 let sobrenome = document.querySelector('#input_sobrenome')
 let email = document.querySelector('#input_email')

 // función para guardar registro
 function AddRegistroNovo() {
     let nomeUsuario = nome.value;
     let sobrenomeUsuario = sobrenome.value;
     let emailUsuario = email.value;
     // Nuevo objeto Usuario para crear conjunto de valores de usuario desde input
     let usuario = new Usuario(nomeUsuario, sobrenomeUsuario, emailUsuario)
     //  Vamos a crear una lista de los usuarios a través de este new usuario
     usuarios.push(usuario);
    //  limpiar los inputs
     nome.value = ""
     sobrenome.value = ""
     email.value = ""
 }
 // linkar la función con el botón y add preventDefault para que la pag no se recargue con el click
 document.querySelector('#btn_submit').addEventListener('click',
     function (evt) {
         evt.preventDefault();
     })