//   globales... para todos los input
document.querySelectorAll('input').forEach(el => el.classList.add ('not-validated'));
document.querySelectorAll('input#email').forEach(el => el.addEventListener ('click', validateEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener ('click', validateNotEmpty));