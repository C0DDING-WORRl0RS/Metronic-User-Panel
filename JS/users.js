// Query selectors to get DOM elements for manipulation.
const updateNavBar = document.querySelector(".update-navbar"); // Reference to the update nav bar.
const navbar = document.querySelector(".nav-d-item"); // Reference to the primary nav bar.
const printer = document.querySelector(".printer"); // Reference to the printer icon that might be used for toggling display.
const body = document.querySelector("body"); // Reference to the body element, not currently used in the script.
const button = document.querySelector(".button"); // Reference to a button element for event binding.
const profiles = document.querySelector(".profile-container"); // Reference to the profile container that will be shown/hidden.
const update = document.querySelector(".update"); // Select the DOM element with the class 'update' and assign it to the 'update' constant
const eachProfile = document.querySelectorAll(".profiles"); // Select all DOM elements with the class 'profiles' and assign the NodeList to the 'eachProfile' constant

// Opens the update nav bar and hides the main nav bar.
function openUpdateNavbar() {
  updateNavBar.style.display = "block"; // Show the update nav bar.
  navbar.style.display = "none"; // Hide the main nav bar.
}

// Adds event listener to the printer icon that triggers 'openNavbar' function to toggle visibility of nav bars.
printer.addEventListener("click", openNavbar);

// Function to toggle the nav bars' visibility states.
function openNavbar() {
  navbar.style.display = "block"; // Show the main nav bar.
  updateNavBar.style.display = "none"; // Hide the update nav bar.
}

// Adds an event listener to the button for hiding the profiles section upon click.
// Listen for a click event on the button to hide all elements in the eachProfile collection
button.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default action of the event (useful for not submitting a form)

  profiles.style.display = "none"
});

// Add an event listener to the body to handle clicks for toggling the visibility of navigation elements.
body.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default action for the click event.

  // Check if the clicked target does not have the 'printer' class.
  if (!e.target.classList.contains("printer")) {
    // If the main navbar is displayed, then hide it when clicking outside of the printer area.
    if (navbar.style.display === "block") {
      // Note: Assignment '=' changed to comparison '===' for correct behavior.
      navbar.style.display = "none"; // Hide the navbar element.
      // The console.log can be uncommented for debugging purposes to see the clicked target.
      // console.log(e.target);
    }
  }

  // Check if the clicked target does not have the 'update' class.
  if (!e.target.classList.contains("update")) {
    // If the update nav bar is displayed, then hide it when clicking outside of the update area.
    if (updateNavBar.style.display === "block") {
      // Note: Assignment '=' changed to comparison '===' for correct behavior.
      updateNavBar.style.display = "none"; // Hide the update nav bar.
      // This console.log can also be uncommented for debugging purposes to see the clicked target.
      // console.log(e.target);
    }
  }
});


// table------------------------
// new DataTable('#example', {
//   columnDefs: [{
//     targets: -1,
//     visible: false
//   }]
// });
