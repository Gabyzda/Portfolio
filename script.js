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
     //  limpiar los inputs, no estoy segura...
     //  nome.value = ""
     //  sobrenome.value = ""
     //  email.value = ""
     form.reset();
 }

 //  garantizar que los campos estén correctamente preenchidos, "Validación de datos" y/o que no estén vacios al clicar botón
 function ValidacaoCampo() {
     if (nome.value == "") {
         alert("O campo Nome é obrigatório. Favor preenchê-lo.")
         nome.focus()
     } else if (sobrenome.value == "") {
         alert("O campo Sobrenome é obrigatório. Favor preenchê-lo.")
     } else if (email.value == "") {
         alert(""
             O campo Email é obrigatório.Favor preenchê - lo.
             "")
     }
 }

 // linkar la función con el botón y add preventDefault para que la pag no se recargue con el click
 document.querySelector('#btn_submit').addEventListener('click',
     function (evt) {
         evt.preventDefault();
     })