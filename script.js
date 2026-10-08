/* ============================== MOBILE NAVIGATION ============================== */
// Select the menu button and navigation links const menuToggle = document.getElementById("menuToggle"); const navLinks = document.getElementById("navLinks");
// Open and close the mobile navigation menu menuToggle.addEventListener("click", function () { navLinks.classList.toggle("active"); });
// Close the mobile menu after clicking a navigation link const navigationLinks = document.querySelectorAll(".nav-links a");
navigationLinks.forEach(function (link) {
link.addEventListener("click", function () { navLinks.classList.remove("active"); });
});
