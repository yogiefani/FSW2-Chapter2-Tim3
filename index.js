let button = document.getElementById('button-hobby')

button.addEventListener('click', ()=> {
    let hobby = document.getElementById('hobby')
    let inputHobby = document.getElementById('input-hobby')

    if (inputHobby.value !== '') {
        hobby.innerHTML = inputHobby.value;
    }
    
    inputHobby.value = ''
})