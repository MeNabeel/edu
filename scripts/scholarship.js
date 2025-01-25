document.getElementById("scholarshipForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const marks = parseInt(document.getElementById("marks").value);
    const background = document.getElementById("background").value;
    const specialTest = document.getElementById("specialTest").value;
  
    // University suggestions based on marks
    let universities = [];
    if (marks >= 1100) {
      universities = [
        "University of the Punjab",
        "Lahore University of Management Sciences (LUMS)",
        "University of Engineering and Technology (UET)",
      ];
    } else if (marks >= 1000) {
      universities = [
        "Government College University",
        "University of Central Punjab",
        "University of Management and Technology",
      ];
    } else if (marks >= 900) {
      universities = [
        "University of Lahore",
        "University of South Asia",
        "Lahore School of Economics",
      ];
    } else if (marks >= 800) {
      universities = [
        "Forman Christian College",
        "Beaconhouse National University",
        "Superior University",
      ];
    } else if (marks >= 700) {
      universities = [
        "Hajvery University",
        "Minhaj University",
        "Nur International University",
      ];
    } else {
      universities = ["No universities found for your marks."];
    }
  
    // Special requirements
    let specialMessage = "";
    if (specialTest === "LAT" && marks >= 1000) {
      specialMessage = " You qualify for law programs (LAT passed).";
    } else if (specialTest === "MDCAT" && marks >= 1000) {
      specialMessage = " You qualify for medical programs (MDCAT passed).";
    }
  
    // Display response
    const message = `${name}, based on your marks (${marks}/1200), here are some universities you can consider: ${universities.join(
      ", "
    )}.${specialMessage}`;
    document.getElementById("responseMessage").textContent = message;
  });