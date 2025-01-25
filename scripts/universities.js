const slides = document.querySelector(".slides");
const slideshowButtons = document.querySelectorAll(".slideshow-btn");

let currentSlide = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  slideshowButtons.forEach((btn) => btn.classList.remove("active"));
  slideshowButtons[index].classList.add("active");
}

slideshowButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

const cityFilter = document.getElementById("city-filter");
const governmentBtn = document.getElementById("government-btn");
const privateBtn = document.getElementById("private-btn");
const universitiesListSection = document.querySelector(".universities-list");
const universityResults = document.getElementById("university-results");

const universities = [
  { name: "University of the Punjab", city: "lahore", type: "Government" },
  { name: "Lahore University of Management Sciences (LUMS)", city: "lahore", type: "Private" },
  { name: "University of Agriculture", city: "faisalabad", type: "Government" },
  { name: "University of Faisalabad", city: "faisalabad", type: "Private" },
  { name: "Pir Mehr Ali Shah Arid Agriculture University", city: "rawalpindi", type: "Government" },
  { name: "Bahauddin Zakariya University", city: "multan", type: "Government" },
  { name: "University of Gujrat", city: "gujrat", type: "Government" },
  { name: "University of Sialkot", city: "sialkot", type: "Private" },
  { name: "Islamia University of Bahawalpur", city: "bahawalpur", type: "Government" },
  { name: "University of Sargodha", city: "sargodha", type: "Government" },
  { name: "Ghazi University", city: "dera ghazi khan", type: "Government" },
  { name: "University of Mianwali", city: "mianwali", type: "Government" },
  { name: "University of Okara", city: "okara", type: "Government" },
  { name: "University of Sahiwal", city: "sahiwal", type: "Government" },
  { name: "University of Jhang", city: "jhang", type: "Government" },
  { name: "University of Narowal", city: "narowal", type: "Government" },
  { name: "Punjab University of Technology Rasul", city: "mandi bahauddin", type: "Government" },
  { name: "University of Chakwal", city: "chakwal", type: "Government" },
  { name: "GIFT University", city: "gujranwala", type: "Private" },
  { name: "Grand Asian University", city: "sialkot", type: "Private" },
  { name: "Namal Institute", city: "mianwali", type: "Private" },
  { name: "The Times Institute", city: "multan", type: "Private" },
  { name: "Hajvery University", city: "lahore", type: "Private" },
  { name: "Superior University", city: "lahore", type: "Private" },
  { name: "Minhaj University", city: "lahore", type: "Private" },
  { name: "Nur International University", city: "lahore", type: "Private" },
  { name: "Qarshi University", city: "lahore", type: "Private" },
  { name: "Lahore Leads University", city: "lahore", type: "Private" },
  { name: "Green International University", city: "lahore", type: "Private" },
  { name: "Imperial College of Business Studies", city: "lahore", type: "Private" },
  { name: "Institute of Management Sciences", city: "lahore", type: "Private" },
  { name: "Global Institute", city: "lahore", type: "Private" },
  { name: "Ali Institute of Education", city: "lahore", type: "Private" },
  { name: "Lahore Garrison University", city: "lahore", type: "Private" },
  { name: "Lahore Institute of Science and Technology", city: "lahore", type: "Private" },
];

function filterUniversities() {
  const selectedCity = cityFilter.value;
  const selectedType = governmentBtn.classList.contains("active")
    ? "Government"
    : privateBtn.classList.contains("active")
    ? "Private"
    : null;

  const filtered = universities.filter((uni) => {
    const cityMatch = selectedCity === "all" || uni.city === selectedCity;
    const typeMatch = !selectedType || uni.type === selectedType;
    return cityMatch && typeMatch;
  });

  displayUniversities(filtered);
}

function displayUniversities(filteredUniversities) {
  if (
    cityFilter.value === "all" &&
    !governmentBtn.classList.contains("active") &&
    !privateBtn.classList.contains("active")
  ) {
    // No filters applied: Hide universities list and show slideshow
    universitiesListSection.classList.add("hidden");
  } else {
    // Filters applied: Show universities list and hide slideshow
    universitiesListSection.classList.remove("hidden");

    // Display filtered universities
    universityResults.innerHTML = filteredUniversities
      .map(
        (uni) => `
      <div class="university-card">
        <h3>${uni.name}</h3>
        <p><strong>City:</strong> ${uni.city}</p>
        <p><strong>Type:</strong> ${uni.type}</p>
      </div>
    `
      )
      .join("");
  }
}

// Event Listeners for Filters
cityFilter.addEventListener("change", filterUniversities);
governmentBtn.addEventListener("click", () => {
  governmentBtn.classList.toggle("active");
  privateBtn.classList.remove("active");
  filterUniversities();
});
privateBtn.addEventListener("click", () => {
  privateBtn.classList.toggle("active");
  governmentBtn.classList.remove("active");
  filterUniversities();
});

// Initial display of all universities (hide universities list by default)
filterUniversities();