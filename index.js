let button = document.getElementById('btn-age');
let inputAge = document.getElementById('input-age');
let errorAge = document.getElementById('error-age');

button.addEventListener('click', () => {
    let age = document.getElementById('age');

    if (inputAge.value !== '') {
        age.innerHTML = inputAge.value;
        errorAge.innerHTML = '';
    } else {
        errorAge.innerHTML = "Input umur wajib diisi!";
        errorAge.style.color = "red";
    }

    inputAge.value = '';
})