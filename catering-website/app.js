// app.js (NO FIREBASE HERE)

console.log("App.js loaded");

// Booking Form Handler Only (Optional)
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Booking feature works, but uses Firestore only from checkout page.");
  });
}

// Navbar toggle
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
