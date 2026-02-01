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
