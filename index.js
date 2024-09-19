const update = function() {
    let hobby = document.getElementById('hobby');
    let inputHobby = document.getElementById('input-hobby');

    hobby.innerHTML = inputHobby.value;
    
    inputHobby.value = '';
};