// Select the mobile menu button
const menuToggle = document.getElementById("menuToggle");
// Select the navigation menu
const navLinks = document.getElementById("navLinks");
// Open and close the mobile menu
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// Select all navigation links
const navigationLinks = document.querySelectorAll(".nav-links a");
// Close the menu after selecting a page section
navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
