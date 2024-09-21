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

function submitProdi() {
    const name = document.getElementById('prodiName').value;
    const code = document.getElementById('prodiCode').value;
    const resultDiv = document.getElementById('result');
    
    if (name && code) {
        resultDiv.innerHTML = `<strong>Program Studi:</strong> ${name} <br> <strong>Kode:</strong> ${code}`;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = "Harap isikan semua kolom!";
        resultDiv.style.display = 'block';
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.color = '#721c24';
        resultDiv.style.borderColor = '#f5c6cb';
    }
}