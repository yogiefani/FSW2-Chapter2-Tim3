// function submitProdi() {
//   const name = document.getElementById("prodiName").value;
//   const code = document.getElementById("prodiCode").value;
//   const resultDiv = document.getElementById("result");

//   if (name && code) {
//     resultDiv.innerHTML = `<strong>Program Studi:</strong> ${name} <br> <strong>Kode:</strong> ${code}`;
//     resultDiv.style.display = "block";
//   } else {
//     resultDiv.innerHTML = "Harap isikan semua kolom!";
//     resultDiv.style.display = "block";
//     resultDiv.style.backgroundColor = "#f8d7da";
//     resultDiv.style.color = "#721c24";
//     resultDiv.style.borderColor = "#f5c6cb";
//   }
// }

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

function updateUniversity() {
  const university = document.getElementById("university-input").value;
  const resultDiv = document.getElementById("university");
  resultDiv.style.color = "#000";

  if (university) {
    resultDiv.innerHTML = `<strong>${university}</strong> `;
  } else {
    resultDiv.innerHTML = "Harap isi  kolom universitas!";
    resultDiv.style.color = "#FF0000";
  }
}

function updateAge() {
  const age = document.getElementById("age-input").value;
  const resultDiv = document.getElementById("age");
  resultDiv.style.color = "#000";

  if (age) {
    resultDiv.innerHTML = `<strong>${age}</strong> `;
  } else {
    resultDiv.innerHTML = "Harap isi  kolom umur!";
    resultDiv.style.color = "#FF0000";
  }
}

function updateProdi() {
  const prodi = document.getElementById("prodi-input").value;
  const resultDiv = document.getElementById("prodi");
  resultDiv.style.color = "#000";

  if (prodi) {
    resultDiv.innerHTML = `<strong>${prodi}</strong> `;
  } else {
    resultDiv.innerHTML = "Harap isi  kolom prodi!";
    resultDiv.style.color = "#FF0000";
  }
}

function updateHobby() {
  const hobby = document.getElementById("hobby-input").value;
  const resultDiv = document.getElementById("hobby");
  resultDiv.style.color = "#000";

  if (hobby) {
    resultDiv.innerHTML = `<strong>${hobby}</strong> `;
  } else {
    resultDiv.innerHTML = "Harap isi  kolom Hobi!";
    resultDiv.style.color = "#FF0000";
  }
}

function updateDomisili() {
  const domisili = document.getElementById("domisili-input").value;
  const resultDiv = document.getElementById("domisili");
  resultDiv.style.color = "#000";

  if (domisili) {
    resultDiv.innerHTML = `<strong>${domisili}</strong> `;
  } else {
    resultDiv.innerHTML = "Harap isi  kolom domisili!";
    resultDiv.style.color = "#FF0000";
  }
}
