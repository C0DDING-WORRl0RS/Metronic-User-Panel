// colums chart start
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
// generate chart
let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// column chart end

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
                    return 'Links: '
                }
            }
        },
    },
};

// generate the chart
let areaChart = new ApexCharts(document.querySelector("#area-chart"), area);
areaChart.render();
// Area chart end...


// column chart start
am5.ready(function () {
    // Create root element
    let root = am5.Root.new("column-chart");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: false,
        paddingLeft: 0,
        paddingRight: 1
    }));

    // Add cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);


    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 30,
        minorGridEnabled: false
    });

    xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
    });

    xRenderer.grid.template.setAll({
        location: null
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    let yRenderer = am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
    })

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer
    }));

    // Create series
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
    }));

    series.columns.template.setAll({
        cornerRadiusTL: 5,
        cornerRadiusTR: 5,
        strokeOpacity: 0
    });

    series.set("fill", am5.color('#2C9AFF')); // set Series color to red

    // Set data
    let data = [{
        country: "USA",
        value: 720
    }, {
        country: "UK",
        value: 625
    }, {
        country: "چین",
        value: 602
    }, {
        country: "ژاپن",
        value: 509
    }, {
        country: "المان",
        value: 322
    }, {
        country: "فرانسه",
        value: 214
    }, {
        country: "هند",
        value: 204
    }, {
        country: "Spain",
        value: 200
    }, {
        country: "ایتالیا",
        value: 165
    }, {
        country: "Russia",
        value: 152
    }, {
        country: "نروژ",
        value: 125
    }, {
        country: "Canada",
        value: 99
    }];

    xAxis.data.setAll(data);
    series.data.setAll(data);


    // Make stuff animate on load
    series.appear(1000);
    chart.appear(1000, 100);

}); // end am5.ready()
// column chart end ...