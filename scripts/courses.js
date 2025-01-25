// Roadmap Toggle Logic
document.querySelectorAll(".roadmap-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const roadmap = btn.nextElementSibling;
      roadmap.classList.toggle("visible");
    });
  });