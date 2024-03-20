// After successful form submission in signup.js, redirect to the home page
function redirectToHomePage() {
    window.location.href = "/home"; // Replace "/home" with the URL of your home page
}

// On the home page, display user initials and provide options dropdown
document.addEventListener("DOMContentLoaded", function() {
    // Extract initials from username
    const username = "Example User"; // Replace this with the actual username obtained from signup data or user session
    const initials = username.split(" ").map(name => name.charAt(0)).join("").toUpperCase();

    // Display initials on the page
    const initialsContainer = document.querySelector(".initials-container");
    initialsContainer.textContent = initials;

    // Add event listener to initials container to toggle dropdown
    initialsContainer.addEventListener("click", function() {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        dropdownMenu.classList.toggle("show");
    });

    // Add event listener to document to close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.matches(".initials-container")) {
            const dropdownMenu = document.querySelector(".dropdown-menu");
            if (dropdownMenu.classList.contains("show")) {
                dropdownMenu.classList.remove("show");
            }
        }
    });
});

// JavaScript code for toggling dropdown menu
const initials = document.querySelector('.initials');
const dropdown = document.getElementById('dropdown');

initials.addEventListener('click', function() {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});
