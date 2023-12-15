// varibles...
let icons = document.querySelectorAll(".icon-modal");

console.log(icons);
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

var options = {
  series: [
    {
      data: [400, 430, 448, 470, 540],
      
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      // distributed: true,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["United States", "Canada", "United Kingdom", "South Korea"],
  },
  // background-color
  fill: {
    colors: [" rgba(62, 151, 255, 0.85)","#00000","#fffff","#fffff","#fffff"],
  },
  // hover in chart
  markers: {
    colors: ["#00ff00"],
  },
  //
  
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
