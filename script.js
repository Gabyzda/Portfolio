const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    nome: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    sobrenome: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nome: false,
    sobrenome: false,
    email: false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "nome":
            validarCampo(expresiones.nome, e.target, 'nome');
            break;
        case "sobrenome":
            validarCampo(expresiones.sobrenome, e.target, 'sobrenome');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.querySelector(`#campo_${campo} .form_input-error`).classList.remove('form_input-error-active');
        campos[campo] = true;
    } else {
        document.querySelector(`#campo_${campo} .form_input-error`).classList.add('form_input-error-active');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nome && campos.sobrenome && campos.email) {
        form.reset();

        document.getElementById('msj_exito').classList.add('msj_exito-active');
        setTimeout(() => {
            document.getElementById('msj_exito').classList.remove('msj_exito-active');
        }, 5000);
    } else {
        document.getElementById('form_error').classList.add('form_error-active');
    }
});
