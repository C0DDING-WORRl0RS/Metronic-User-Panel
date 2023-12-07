const updateNavBar = document.querySelector(".update-navbar");
const navbar = document.querySelector(".navbar");
const printer = document.querySelector(".printer")
const body = document.querySelector("body")
const button = document.querySelector(".button")
const profiles = document.querySelector(".profile-container")

function openUpdateNavbar(){
    updateNavBar.style.display = "block"
    navbar.style.display = "none"
}
printer.addEventListener("click" , openNavbar)
function openNavbar(){
    navbar.style.display = "block"
    updateNavBar.style.display = "none"
}
button.addEventListener("click" , (e) => {
    e.preventDefault()
    profiles.style.display = " none"
})
