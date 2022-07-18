function validacaoEmail (e) { /* Agarrar un valor cuando usuario clica */
    let campo = e.target; /*se refiere al elemento clicado */
    let campoValue = campo.value;

    if (campoValue.search('@') == -1) { /*usamos el value.search para buscar el arroba*/
        displayError('Email inválido', campo);
    } else {
        borrarError(campo); /*si el @ es encontrado, limpiamos el error*/
    }

    campo.classList.remove('nao-validado'); /*clase agregada para decir que todos los input fueron validados y se borra */
    marqueHabilitarSubmit(); /*Aqui se checa si es válido o no*/
}

function validarNaoVazio(e) {
    let campo = e.target;
    let campoValue = campo.value;

    if (campoValue == ' ') { /*Aqui usamos un campo en blanco para checar que no esté vacío */
        displayError('Campo não pode ser vazio', campo);
    } else {
        borrarError(campo);
    }

    campo.classList.remove('nao-validado');
    marqueHabilitarSubmit();
}

function displayError(mensagem, campo) { /*Aquí pasamos un mensaje y un campo */
    borrarError(campo)
    campo.classList.add('e-invalido');
    let error = document.createElement('small'); /*Para colocar un texto de error dentro de él*/
    error.style.color = 'red';
    error.classList.add('mensagem_error');
    error.textContent = mensagem;
    campo.parentElement.appendChild(error);
}

function borrarError(campo) {
    let container = campo.parentElement;
    let error = container.querySelector('.mensagem_error');
    if (error) { /*si es que hay error, se remueve éso */
        container.removeChild(error);
    }
    campo.classList.remove('e-invalido');
}

function marqueHabilitarSubmit() {
    let form = document.querySelector('#form');
    let naoValidado = form.querySelectorAll('.nao-validado'); /*ver si hay campos no validados dentro de formulario */
    let errors = form.querySelectorAll('.e-invalido'); /*y tambien inválidos */

    if (errors.length == 0 && naoValidado.length == 0) {
        ativarSubmit();
    } else {
        desativarSubmit();
    }
}
// estas dos funciones que vienen son para habilitar o desabilitar botón 
function ativarSubmit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type=submit]');


    submit.disabled = false;
}

function desativarSubmit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type=submit]');


    submit.disabled = true;
}

document.querySelectorAll('input').forEach(el => el.classList.add ('nao-validado')); /*Todos los elementos input*/
document.querySelectorAll('input.email').forEach(el => el.addEventListener ('click', validacaoEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener ('click', validarNaoVazio));