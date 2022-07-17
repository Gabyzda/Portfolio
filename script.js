 // array que guarda los objetos de personas
 let usuarios = [];
 //  array que guarda los mensajes de error
 let smsError = [];

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
 let error = document.querySelector('#error')

 // función para guardar registro, add mensaje de error
 function AddRegistroNovo() {
     if (ValidacaoCampo() != 0) {
         let nomeUsuario = nome.value;
         let sobrenomeUsuario = sobrenome.value;
         let emailUsuario = email.value;
         // Nuevo objeto Usuario para crear conjunto de valores de usuario desde input
         let usuario = new Usuario(nomeUsuario, sobrenomeUsuario, emailUsuario)
         //  Vamos a crear una lista de los usuarios a través de este new usuario
         usuarios.push(usuario);
         //  limpiar los inputs, no estoy segura...
         //  nome.value = ""
         //  sobrenome.value = ""
         //  email.value = ""
         form.reset();
     } else {
        error.textContent = smsError.join(', ')
     }
 }

 //  garantizar que los campos estén correctamente preenchidos, "Validación de datos" y/o que no estén vacios al clicar botón
 function ValidacaoCampo() {
     if (nome.value == "") {
         smsError.push("O campo Nome é obrigatório. Favor preenchê-lo.")
         nome.focus()
         return 0
     } else if (sobrenome.value == "") {
         smsError.push("O campo Sobrenome é obrigatório. Favor preenchê-lo.")
         sobrenome.focus()
         return 0
     } else if (email.value == "") {
         smsError.push("O campo Email é obrigatório. Favor preenchê-lo.")
         email.focus()
         return 0
     }
 }

 // linkar la función con el botón y add preventDefault para que la pag no se recargue con el click
 document.querySelector('#btn_submit').addEventListener('click',
     function (evt) {
         evt.preventDefault();
     })
 document.querySelector('#btn_submit').addEventListener('click', AddRegistroNovo)

 //  Evento para validación de campo
 document.querySelector('#btn_submit').addEventListener('click', ValidacaoCampo)