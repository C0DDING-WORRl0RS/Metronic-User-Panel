// letibles...
let icons = document.querySelectorAll(".icon-modal");
const mediaTable = document.querySelector(".mediaTable");
const Referencestable = document.querySelector("#References-table")
const ShowPage = document.querySelector("#show-page")

// event...
document.addEventListener("DOMContentLoaded", tableData)
document.addEventListener("DOMContentLoaded", ReferencesTable)

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
var scrollIcon = document.querySelector(".scrolltop");
var header = document.querySelector("#main-header");
scrollIcon.href = header;

// Function to show the div with flex display when scrolled down
function showDivOnScroll() {
  var triggerHeight = 100; // The scroll position (in pixels) at which you want to show the div

  if (window.scrollY > triggerHeight) {
    // When scrolled down past triggerHeight, change display to flex
    scrollIcon.style.display = "flex";
    scrollIcon.style.opacity = "0.3";
  } else {
    // Hide the div when above triggerHeight
    scrollIcon.style.display = "none";
    scrollIcon.style.opacity = "0";
  }
}
scrollIcon.addEventListener("mouseover", function () {
  // Change style when the mouse enters the element area
  this.style.backgroundColor = "#2C9AFF"; // Put your desired hover style changes here
  this.style.opacity = "1";
});

// Define the mouseout event listener
scrollIcon.addEventListener("mouseout", function () {
  // Revert style when the mouse leaves the element area
  this.style.backgroundColor = ""; // Revert back to original styles
  this.style.opacity = "0.3";
});

// Add the scroll event listener to the window
window.addEventListener("scroll", showDivOnScroll);

// Function that updates the style
function updateMarginOnScroll() {
  var newMarginBottom = "-15px"; // New margin-bottom value when scrolled

  // Check if we have scrolled (this is an example, you might need to check against a specific value)
  if (window.pageYOffset > 0) {
    // You can change '0' to any other number depending on when you want the style to apply
    scrollIcon.style.marginBottom = newMarginBottom;
  } else {
    scrollIcon.style.marginBottom = "0"; // Reset to original value when not scrolled
  }
}

// Listen to the scroll event
window.addEventListener("scroll", updateMarginOnScroll);

/**
 * template of table with data from json file 
 * @param {object} data - data og object is from config.JSON file (data of table)
 * @returns - template (table) => with data
 */
function tableTemplate(data) {
  return ` <div class="table-item w-100 d-flex justify-content-between align-items-center">
  <div class="d-flex align-items-center justify-content-center">
    <div><img src=${data.image} alt=""></div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="fs-5 fw-bold">${data.app}</div>
      <div class="fs-6">${data.text}</div>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <div class="fw-bold">${data.number}</div>
    <div>
    <span class="material-symbols-outlined text-danger-span ms-n1">
      arrow_upward
    </span>
      <span>${data.range}</span>
    </div>
  </div>
</div>
<!-- seprator strat -->
<div class="separator my-2 separator-dashed"></div>
<!-- seprator end -->`
}

function ReferencesTemplate(data) {
  return `   <tr>

  <td class="ps-0"><a href="#" class="link-underline link-underline-opacity-0">${data.app}</a></td>
  <td class=" ps-0">
    <div class="d-flex justify-content-end align-items-center gap-3">
      <span>${data.num01}</span>
      <span>${data.rate01}</span>
    </div>
  </td>
  <td class="ps-0">
    <div class="d-flex justify-content-end align-items-center gap-3">
      <span>${data.num02}</span>
      <span>${data.rate02}</span>
    </div>
  </td>
</tr>`
}
function tableData() {

  // get data from the JSON file
  fetch('../JSON/./config.json')
    //change the json file format to onject 
    .then((response) => response.json())
    .then(async (json) => addTableItem(await json)).catch((error) => alert(error.message))

}

/**
 * array from json fole then this function separate all perperties from the object in array 
 * @param {Array} data - objects in json file
 */
function addTableItem(data) {
  for (let i = 0; i < data.data.length; i++) {
    let item = data.data[i];
    let obj = {
      image: item.image,
      app: item.app_logo,
      text: item.text,
      number: item.number,
      range: item.range
    }

    // call function for add template
    addTable(obj)
  }
  for (let i = 0; i < data.ReferencesTable.length; i++) {
    let item = data.ReferencesTable[i];
    let obj = {
      app: item.app,
      num01: item.num01,
      rate01: item.rate01,
      num02: item.num02,
      rate02: item.rate02
    }
    ReferencesTable(obj)
  }
  for (let i = 0; i < data.ShowPage.length; i++) {
    let item = data.ShowPage[i];
    let obj = {
      app: item.app,
      num01: item.num01,
      rate01: item.rate01,
      num02: item.num02,
      rate02: item.rate02
    }
    showPages(obj)
  }

}
/**
 * call template funtion for add to DOM
 * @param {object} data - all perperties from the object in array 
 */
function addTable(data) {
  mediaTable.insertAdjacentHTML('beforeend', tableTemplate(data))
}

function ReferencesTable(data) {
  Referencestable.insertAdjacentHTML('beforeend', ReferencesTemplate(data))
}

function showPages(data){
  ShowPage.insertAdjacentHTML("beforeend", ReferencesTemplate(data))
  console.log(data);
}