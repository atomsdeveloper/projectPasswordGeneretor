const rangeNumbers = document.getElementById('rangeNumbers');
const passwordGeneretor = document.getElementById('passwordGeneretor');
const numbersCharacter = document.getElementById('numbersCharacter');
const password = document.getElementById('password');
const viewPassword =document.getElementById('viewPassword');

let charset = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ123456789!*@#>_$&%./';
let generetor = '';

numbersCharacter.innerHTML = rangeNumbers.value;

rangeNumbers.oninput = function () {
    numbersCharacter.innerHTML = this.value;
};

function gerar() {
 
    let pass = '';
    for (i = 0, n = charset.length; i < rangeNumbers.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    };

    viewPassword.classList.remove('viewPassword')
    password.innerHTML = pass;
};