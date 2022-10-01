const button = document.querySelector('#btnEl');
const buttonGoogle = document.querySelector('#btnSearch');
const logoGogole = document.querySelector('#logo-google');
const logoMakiage = document.querySelector('#logo-makiage');

button.addEventListener('click', changeLogo);
buttonGoogle.addEventListener('click', newChangeLogo);

function changeLogo() {
  logoGogole.classList.add('visually-hidden');
  logoMakiage.classList.remove('visually-hidden');
}

function newChangeLogo() {
  logoGogole.classList.remove('visually-hidden');
  logoMakiage.classList.add('visually-hidden');
}
