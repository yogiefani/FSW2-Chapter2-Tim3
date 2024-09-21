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

// Dark-Mode

let body = document.getElementsByTagName("body");
let darkMode = document.getElementById("dark-mode");

let isDarkMode = localStorage.getItem("isDarkMode") === "true";

if (isDarkMode) {
    darkMode.src = "./public/assets/moon.svg";
    body[0].style.backgroundColor = "#021526";
} else {
    darkMode.src = "./public/assets/sun.svg";
    body[0].style.backgroundColor = "white";
}

darkMode.addEventListener("click", () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        darkMode.src = "./public/assets/moon.svg";
        body[0].style.backgroundColor = "#021526";
    } else {
        darkMode.src = "./public/assets/sun.svg";
        body[0].style.backgroundColor = "white";
    }

    localStorage.setItem("isDarkMode", isDarkMode);
});