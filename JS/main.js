// letibles...
let icons = document.querySelectorAll('.icon-modal');

// event...

// functions...
/**
 * when user touchend in moball show this modal
 */
icons.forEach(function (item) {
  item.addEventListener("touchend", () => {
    Swal.fire({
      title: "در حال ساخت...",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
      },
    });
  });
});

// for responsive mode in right item if header
$(document).ready(function () {
  // Check if the window width is less than a certain value (e.g., 768 pixels)
  if ($(window).width() > 779) {
    // Disable the accordion functionality
    $(".accordion-right").removeClass("accordion");
  }
});




// scroll icon ----------------------

// Get the div that you want to show
var scrollIcon = document.querySelector('.scrolltop');
var header = document.querySelector("#main-header")
scrollIcon.href = header

// Function to show the div with flex display when scrolled down
function showDivOnScroll() {
  var triggerHeight = 100; // The scroll position (in pixels) at which you want to show the div
  
  if (window.scrollY > triggerHeight) {
    // When scrolled down past triggerHeight, change display to flex
    scrollIcon.style.display = 'flex';
    scrollIcon.style.opacity = '0.3';
  } else {
    // Hide the div when above triggerHeight
    scrollIcon.style.display = 'none';
    scrollIcon.style.opacity = '0';

  }
}
scrollIcon.addEventListener('mouseover', function() {
  // Change style when the mouse enters the element area
  this.style.backgroundColor = '#2C9AFF'; // Put your desired hover style changes here
  this.style.opacity = '1';
});

// Define the mouseout event listener
scrollIcon.addEventListener('mouseout', function() {
  // Revert style when the mouse leaves the element area
  this.style.backgroundColor = ''; // Revert back to original styles
  this.style.opacity = '0.3';
});

// Add the scroll event listener to the window
window.addEventListener('scroll', showDivOnScroll);





// Function that updates the style
function updateMarginOnScroll() {
  var newMarginBottom = '-15px'; // New margin-bottom value when scrolled

  // Check if we have scrolled (this is an example, you might need to check against a specific value)
  if (window.pageYOffset > 0) { // You can change '0' to any other number depending on when you want the style to apply
    scrollIcon.style.marginBottom = newMarginBottom;
  } else {
    scrollIcon.style.marginBottom = '0'; // Reset to original value when not scrolled
  }
}

// Listen to the scroll event
window.addEventListener('scroll', updateMarginOnScroll);