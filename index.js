function updateSemester() {
    const semester = document.getElementById("semester-input").value;
    const resultDiv = document.getElementById("semester");
    resultDiv.style.color = "#000";
  
    if (semester) {
      resultDiv.innerHTML = `<strong>${semester}</strong> `;
    } else {
      resultDiv.innerHTML = "Harap isi  kolom Semester!";
      resultDiv.style.color = "#FF0000";
    }
  }