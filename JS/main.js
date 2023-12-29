// letibles...
let icons = document.querySelectorAll(".icon-modal");
const mediaTable = document.querySelector(".mediaTable");
const Referencestable = document.querySelector("#References-table");
const ShowPage = document.querySelector("#show-page");
const progresTableItems = document.querySelector("#progres-table")
const visitingTable = document.querySelector("#visitingTable")
const searchModal = document.querySelector("#search-modal")

// event...
document.addEventListener("DOMContentLoaded", async () => {
  try {
    //change the json file format to onject
    const tableObject = await tableData();

    addTableItem(tableObject);
  } catch (error) {
    throw error;
  }
});


searchModal.addEventListener("click", () => {
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
})

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
  let newMarginBottom = "-15px"; // New margin-bottom value when scrolled

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
const tableTemplate = (data) => {
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
    <div class="data-range" style="color: #50cd89;
    background-color: #eefbec;
    padding: 1px 9px;
    height: 19px;
    width: 60px;
    font-weight : bold;
    border-radius: 20px;
    margin-bottom:10px
    ">
    <span class="material-symbols-outlined text-danger-span ms-n1">
      arrow_upward
    </span>
      <span class="data-range-span">${data.range}</span>
    </div>
  </div>
</div>
<!-- seprator strat -->
<div class="separator my-2 separator-dashed"></div>
<!-- seprator end -->`;
}

/**
 * template of table with data from json file
 * @param {object} data - data og object is from config.JSON file (data of table)
 * @returns - template (table) => with data
 */
const visitTable = (data) => {
  return ` <div class="visitTable table-item w-100 d-flex justify-content-between align-items-center">
  <div class="d-flex align-items-center justify-content-center">
  <div><span class="${data.classIcon} visit-icon">
  ${data.nameIcon}
  </span></div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class=" visit-title">${data.app}</div>
      <div class=" visit-text">${data.text}</div>
    </div>
    </div>
  <div class="d-flex justify-content-center align-items-center">
    <div class="fw-bold visit-num">${data.number}</div>
    <div class=" visit-range d-flex justify-content-center align-items-center" style="  color: #50cd89;
    background-color: #eefbec;
    padding: 1px 9px;
    width: 58px;
    margin-top: 11px;
    border-radius: 20px;">
    <span class="visit-range-item material-symbols-outlined text-danger-span ms-n1">
      arrow_upward
    </span>
      <span class="visit-range-item">${data.range}</span>
    </div>
  </div>
</div>
<!-- seprator strat -->
<div class="separator my-2 separator-dashed"></div>
<!-- seprator end -->`;
}


/**
 * template of table
 * @param {object} data - data of table
 * @returns 
 */
const ReferencesTemplate = (data) => {
  return `   <tr>
  
  <td class="ps-0"><a href="#" class="about table-a link-underline link-underline-opacity-0" style="color black;font-weight : bold">${data.app}</a></td>
  <td class=" ps-0">
    <div class="d-flex justify-content-end align-items-center gap-3">
      <span style = "color:black; font-weight:bold">${data.num01}</span>
      <span style="color:red">${data.rate01}</span>
    </div>
  </td>
  <td class="ps-0">
    <div class="d-flex justify-content-end align-items-center gap-3">
      <span style = "color:black; font-weight:bold">${data.num02}</span>
      <span  style="color:#50CD89">${data.rate02}</span>
    </div>
  </td>
</tr>`;
}

/**
 * template of table
 * @param {object} data - data from json file about table
 * @returns 
 */
const progresTemplate = (data) => {
  return `<tr>
  <td class="d-flex align-items-center border-0 ps-0"><a href="#"
      class="link-underline link-underline-opacity-0 color-progress">${data.text}</a></td>
  <td class="border-0 ps-0">
    <div class="d-flex align-items-center">
      <span class=" fw-bold text-gray-800 fs-6 ">${data.num}
      </span>
      <div class="progress w-100" role="progressbar" aria-label="Basic example" aria-valuenow="50"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: ${data.progres}"></div>
      </div>
    </div>
  </td>
</tr>`
}

/**
 * 
 * @returns - data from json
 */
const tableData = async () => {
  // get data from the JSON file
  const configData = await fetch("JSON/tableDeta.json");

  // parse the data from JSON
  const jsonData = await configData.json();

  return jsonData;
};

/**
 * array from json file then this function separate all perperties from the object in array
 * @param {Array} data - objects in json file
 */
function addTableItem(data) {
  // call media table functions + send data in json file
  mediaT(data)

  // call visit table functions + send data in json file
  visitT(data)

  // call refrenc table functions + send data in json file
  ReferencesT(data)

  // call showing table functions + send data in json file
  showingT(data)

  // call progress table functions + send data in json file
  progressT(data)
}

/**
 *  array from json file then this function separate all perperties from the object in array and show just data about media table
 * @param {object} data - objects in json file
 */
const mediaT = (data) => {
  for (let i = 0; i < data.data.length; i++) {
    let item = data.data[i];
    let obj = {
      image: item.image,
      app: item.app_logo,
      text: item.text,
      number: item.number,
      range: item.range,
    };

    // call function for add template
    addTable(mediaTable, obj, tableTemplate)
  }
}

/**
 * array from json file then this function separate all perperties from the object in array and show just data about refrence table
 * @param {object} data - objects in json file
 */
const ReferencesT = (data) => {
  for (let i = 0; i < data.ReferencesTable.length; i++) {
    let item = data.ReferencesTable[i];
    let obj = {
      app: item.app,
      num01: item.num01,
      rate01: item.rate01,
      num02: item.num02,
      rate02: item.rate02
    }
    addTable(Referencestable, obj, ReferencesTemplate)
  }
}

/**
 * array from json file then this function separate all perperties from the object in array and show just data about show table
 * @param {object} data - objects in json file
 */
const showingT = (data) => {
  for (let i = 0; i < data.ShowPage.length; i++) {
    let item = data.ShowPage[i];
    let obj = {
      app: item.app,
      num01: item.num01,
      rate01: item.rate01,
      num02: item.num02,
      rate02: item.rate02
    }
    addTable(ShowPage, obj, ReferencesTemplate)
  }
}

/**
 * array from json file then this function separate all perperties from the object in array and show just data about progrece table
 * @param {object} data - objects in json file
 */
const progressT = (data) => {
  for (let i = 0; i < data.progres.length; i++) {
    let item = data.progres[i];
    let obj = {
      text: item.text,
      num: item.num,
      progres: item.progres
    }
    addTable(progresTableItems, obj, progresTemplate)
  }
}

/**
 * array from json file then this function separate all perperties from the object in array and show just data about visit table
 * @param {object} data - objects in json file
 */
const visitT = (data) => {
  for (let i = 0; i < data.visiting.length; i++) {
    let item = data.visiting[i];
    let obj = {
      classIcon: item.classIcon,
      nameIcon: item.nameIcon,
      app: item.app,
      text: item.text,
      number: item.number,
      range: item.range,
    };

    // call function for add template
    addTable(visitingTable, obj, visitTable)
  }
}

/**
 * send table with data to DOM
 * @param {position} position - position of the table
 * @param {object} data - data of table
 * @param {*} callBack - callback function of template
 */
function addTable(position, data, callBack) {
  position.insertAdjacentHTML('beforeend', callBack(data))
}