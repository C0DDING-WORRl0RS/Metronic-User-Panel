let options = {
    series: [{
        data: [12478, 7546, 6083, 5041, 442],
    }, ],
    chart: {
        type: "bar",
        height: 350,
        width: '100%',
        offsetX: 0,
        fontFamily: 'iran-sans-input'
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

let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// Area  chart start...

let area = {
    chart: {
        height: 350,
        type: "area",
        fontFamily: 'iran-sans-input'
    },
    series: [{
        name: "Series 1",
        data: [190, 230, 230, 200, 200, 190, 190, 200, 200, 220, 220, 200, 200, 210, 210],

    }],
    fill: {
        type: "gradient",
        colors: '#4200CC',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    colors: ['#4200CC'],
    xaxis: {
        categories: [
            "04 May",
            "05 May",
            "06 May",
            "09 May",
            "10 MAy",
            "12 MAy",
            "14 MAy",
            "17 MAy",
            "18 May",
            "20 May",
            "22 May",
            "24 May",
            "26 May",
            "30 May"
        ],
        tickPlacement: 'between',
        labels: {
            show: true,
            showDuplicates: false,
            trim: true,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: ['#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1', '#E1E1E1'],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    grid: {
        show: true,
        borderColor: '#E1E1E1',
        strokeDashArray: 8,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        },
    },
    markers: {
        colors: ['#7239EA']
    },
    dataLabels: {
        enabled: false,
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0,
            }
        },
    },
    tooltip: {
        theme: 'light',
        x: {
            show: true,
        },
        y: {
            show: false,
            title: {
                formatter: function () {
                    return 'Lins: '
                }
            }
        }
    },
};

let areaChart = new ApexCharts(document.querySelector("#area-chart"), area);
areaChart.render();
// Area chart end...