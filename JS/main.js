// letibles...
let icons = document.querySelectorAll('.icon-modal');

console.log(icons);
// event...


// functions...
/**
 * when user touchend in moball show this modal
 */
icons.forEach(function (item) {
  item.addEventListener('touchend', () => {
    Swal.fire({
      title: "در حال ساخت...",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
      }
    });
  });
})

// for responsive mode in right item if header 
$(document).ready(function () {
  // Check if the window width is less than a certain value (e.g., 768 pixels)
  if ($(window).width() > 779) {
    // Disable the accordion functionality
    $('.accordion-right').removeClass('accordion');
  }
});


let options = {
  series: [{
    data: [12478, 7546, 6083, 5041, 442],
  }, ],
  chart: {
    type: "bar",
    height: 350,
    width: '100%',
    offsetX: 0
  },
  grid: {
    show: true,
    borderColor: '#E1E1E1',
    strokeDashArray: 8,
    position: 'forward',
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      distributed: true,
      hideOverflowingLabels: true,
      horizontal: true,
      columnWidth: '70%',
      barHeight: '70%',
      dataLabels: {
        position: 'bottom'
      },
    },
  },
  dataLabels: {
    enabled: false,
    textAnchor: 'start',
    style: {
      colors: ['#E1E1E1']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
    },
  },
  xaxis: {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
    ],
  },
  tooltip: {
    theme: 'light',
    x: {
      show: true,
    },
    y: {
      title: {
        formatter: function () {
          return 'Sessions:'
        }
      }
    }
  },
  colors: ["rgba(62, 151, 255, 0.85)", "rgba(241, 65, 108, 0.85)", "rgba(80, 205, 137, 0.85)", "rgba(255, 199, 0, 0.85)", "rgba(114, 57, 234, 0.85)"]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();