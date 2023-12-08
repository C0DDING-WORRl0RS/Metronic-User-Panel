// Query selectors to get DOM elements for manipulation.
const updateNavBar = document.querySelector(".update-navbar"); // Reference to the update nav bar.
const navbar = document.querySelector(".navbar"); // Reference to the primary nav bar.
const printer = document.querySelector(".printer"); // Reference to the printer icon that might be used for toggling display.
const body = document.querySelector("body"); // Reference to the body element, not currently used in the script.
const button = document.querySelector(".button"); // Reference to a button element for event binding.
const profiles = document.querySelector(".profile-container"); // Reference to the profile container that will be shown/hidden.
const update = document.querySelector(".update")

// Opens the update nav bar and hides the main nav bar.
function openUpdateNavbar(){
    updateNavBar.style.display = "block"; // Show the update nav bar.
    navbar.style.display = "none"; // Hide the main nav bar.
}

// Adds event listener to the printer icon that triggers 'openNavbar' function to toggle visibility of nav bars.
printer.addEventListener("click" , openNavbar);

// Function to toggle the nav bars' visibility states.
function openNavbar(){
    navbar.style.display = "block"; // Show the main nav bar.
    updateNavBar.style.display = "none"; // Hide the update nav bar.
}

// Adds an event listener to the button for hiding the profiles section upon click.
button.addEventListener("click" , (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    profiles.style.display = "none"; // Hide the profiles container.
});


body.addEventListener("click" , (e) => {
    e.preventDefault()
    if(!e.target.classList.contains("printer")){
        if(navbar.style.display = "block"){

            navbar.style.display = "none"
            // console.log(e.target);
        }
    } 
    if(!e.target.classList.contains("update")){
        if(updateNavBar.style.display = "block"){

            updateNavBar.style.display = "none"
            // console.log(e.target);
        }
    } 
})
