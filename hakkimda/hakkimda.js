// İş tecrübeleri verileri
const experienceData = [
    { position: "Web Developer", company: "ABC Company", year: "2020-2022" },
    { position: "Front-end Developer", company: "XYZ Tech", year: "2018-2020" }
  ];

  // Eğitim verileri
  const educationData = [
    { degree: "Bachelor of Science in Computer Science", school: "University A", year: "2014-2018" },
    { degree: "Web Development Bootcamp", school: "Coding Academy", year: "2017" }
  ];

  // İş tecrübelerini ekrana bas
  const experienceList = document.getElementById("experienceList");
  experienceData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.position} at ${item.company}, ${item.year}`;
    experienceList.appendChild(li);
  });

  // Eğitim bilgilerini ekrana bas
  const educationList = document.getElementById("educationList");
  educationData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.degree} at ${item.school}, ${item.year}`;
    educationList.appendChild(li);
  });