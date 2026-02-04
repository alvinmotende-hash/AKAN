function getAkanName() {
  const birthDate = document.getElementById("birthDate").value;
  const gender = document.getElementById("gender").value;

  if (!birthDate || !gender) {
    document.getElementById("akanName").textContent = "⚠️ Please enter both date and gender.";
    return false;
  }

  // Use JS Date object
  const date = new Date(birthDate);
  const dayIndex = date.getDay(); // 0 = Sunday
  const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

  const dayName = daysOfWeek[dayIndex];
  const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

  document.getElementById("dayResult").textContent = ` You were born on: ${dayName}`;
  document.getElementById("akanName").textContent = ` Your Akan name is: ${akanName}`;

  return false;
}