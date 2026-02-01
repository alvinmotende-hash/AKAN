function getAkanName() {
    const birthDay = document.getElementById("birthDay").value;
    const gender = document.getElementById("gender").value;

    if (!birthDay || !gender) {
        document.getElementById("akanName").textContent = "Please select both day and gender.";
        return false; // prevent form refresh
    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


    const dayIndex = daysOfWeek.indexOf(birthDay);


    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];


    document.getElementById("akanName").textContent = akanName;

    return false; 
}
function calculateAkanDay() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (
    isNaN(day) || day < 1 || day > 31 ||
    isNaN(month) || month < 1 || month > 12 ||
    isNaN(year) || year < 1000 || year > 9999
  ) {
    document.getElementById("dayResult").textContent = "⚠️ Please enter a valid date.";
    return false;
  }

  const CC = Math.floor(year / 100); // Century
  const YY = year % 100;             // Year within century
  const MM = month;
  const DD = day;

  // Akan formula
  let d = Math.floor(
    ((CC / 4 - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7
  );
  d = (d + 7) % 7; // Ensure non-negative

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[d];

  document.getElementById("dayResult").textContent = `📅 You were born on: ${dayName}`;
  return false;
}