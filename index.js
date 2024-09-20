let button = document.getElementById('button-hobby');

button.addEventListener('click', ()=> {
    let hobby = document.getElementById('hobby');
    let inputHobby = document.getElementById('input-hobby');
    let errorHobby = document.getElementById('error-hobby');

    if (inputHobby.value !== '') {
        hobby.innerHTML = inputHobby.value;
        errorHobby.innerHTML = '';
        inputHobby.style.borderColor = "black";
    }else{
        inputHobby.style.borderColor = "IndianRed";
        errorHobby.innerHTML = "Inputan hobby perlu diisi!";
        errorHobby.style.color = "red";
    }
    
    inputHobby.value = '';
})