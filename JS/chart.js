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

// line chart  orange start
let areaOrange = {
    chart: {
        height: '250px',
        type: "area",
        fontFamily: 'iran-sans-input'
    },
    series: [{
        name: "Series 1",
        data: [4, 7.5, 7.5, 6, 6, 4, 4, 6, 6, 8, 8, 6, 6, 7, 7],

    }],
    fill: {
        type: "gradient",
        colors: '#E78B2F',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    colors: ['#E78B2F'],
    xaxis: {
        categories: [
            "02 Apr",
            "03 Apr",
            "04 Apr",
            "05 Apr",
            "06 Apr",
            "09 Apr",
            "10 Apr",
            "12 Apr",
            "14 Apr",
            "17 Apr",
            "18 Apr",
            "18 Apr",
            "20 Apr",
            "22 Apr",
            "24 Apr",
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
        colors: ['#E78B2F']
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
                    return 'Position: '
                }
            }
        },
    },
};

// generate the chart
let areaChartOrange = new ApexCharts(document.querySelector("#line-chart-orange"), areaOrange);
areaChartOrange.render();
// Area chart end...
// line chart orange end

// lineer chart start...
am5.ready(function () {


    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("linerChart");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.verticalLayout,
            arrangeTooltips: false,
            paddingLeft: 0,
            paddingRight: 10
        })
    );

    // Use only absolute numbers
    chart.getNumberFormatter().set("numberFormat", "#.#s");

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.children.push(
        am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        })
    );

    // Data
    let data = [{
            age: "85+",
            male: -0.1,
            female: 0.3
        },
        {
            age: "80-54",
            male: -0.2,
            female: 0.3
        },
        {
            age: "75-79",
            male: -0.3,
            female: 0.6
        },
        {
            age: "70-74",
            male: -0.5,
            female: 0.8
        },
        {
            age: "65-69",
            male: -0.8,
            female: 1.0
        },
        {
            age: "60-64",
            male: -1.1,
            female: 1.3
        },
        {
            age: "55-59",
            male: -1.7,
            female: 1.9
        },
        {
            age: "50-54",
            male: -2.2,
            female: 2.5
        },
        {
            age: "45-49",
            male: -2.8,
            female: 3.0
        },
        {
            age: "40-44",
            male: -3.4,
            female: 3.6
        },
        {
            age: "35-39",
            male: -4.2,
            female: 4.1
        },
        {
            age: "30-34",
            male: -5.2,
            female: 4.8
        },
        {
            age: "25-29",
            male: -5.6,
            female: 5.1
        },
        {
            age: "20-24",
            male: -5.1,
            female: 5.1
        },
        {
            age: "15-19",
            male: -3.8,
            female: 3.8
        },
        {
            age: "10-14",
            male: -3.2,
            female: 3.4
        },
        {
            age: "5-9",
            male: -4.4,
            female: 4.1
        },
        {
            age: "0-4",
            male: -5.0,
            female: 4.8
        }
    ];

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "age",
            renderer: am5xy.AxisRendererY.new(root, {
                inversed: true,
                cellStartLocation: 0.1,
                cellEndLocation: 0.9,
                minorGridEnabled: true,
                minGridDistance: 20
            })
        })
    );

    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererX.new(root, {
                minGridDistance: 60,
                strokeOpacity: 0.1
            })
        })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function createSeries(field, labelCenterX, pointerOrientation, rangeValue) {
        let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                valueXField: field,
                categoryYField: "age",
                sequencedInterpolation: true,
                clustered: false,
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: pointerOrientation,
                    labelText: "{categoryY}: {valueX}"
                })
            })
        );

        series.columns.template.setAll({
            height: am5.p100,
            strokeOpacity: 0,
            fillOpacity: 0.8
        });

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationX: 1,
                locationY: 0.5,
                sprite: am5.Label.new(root, {
                    centerY: am5.p50,
                    text: "{valueX}",
                    populateText: true,
                    centerX: labelCenterX
                })
            });
        });

        series.data.setAll(data);
        series.appear();

        let rangeDataItem = xAxis.makeDataItem({
            value: rangeValue
        });
        xAxis.createAxisRange(rangeDataItem);
        rangeDataItem.get("grid").setAll({
            strokeOpacity: 1,
            stroke: series.get("stroke")
        });

        let label = rangeDataItem.get("label");
        label.setAll({
            text: field.toUpperCase(),
            fontSize: "1.1em",
            fill: series.get("stroke"),
            paddingTop: 10,
            isMeasured: false,
            centerX: labelCenterX
        });
        label.adapters.add("dy", function () {
            return -chart.plotContainer.height();
        });

        return series;
    }

    createSeries("male", am5.p100, "right", -3);
    createSeries("female", 0, "left", 4);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomY"
    }));
    cursor.lineY.set("forceHidden", true);
    cursor.lineX.set("forceHidden", true);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

}); // end am5.ready()
// liner chart end.....

// map chart start.....
am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("mapBarChart");
    let colors = am5.ColorSet.new(root, {});


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    let chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoAlbersUsa()
    }));


    // Create polygon series for the world map
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let usaSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow
    }));

    usaSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color('#DBDFE9'),
        templateField: "polygonSettings"
    });

    usaSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color("#62d562")
    });

    // Create polygon series for the country map
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let stateSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        visible: false
    }));

    stateSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color(0xaaaaaa)
    });

    stateSeries.mapPolygons.template.states.create("hover", {
        fill: colors.getIndex(9)
    });


    // Add button to go back to continents view
    let backContainer = chart.children.push(am5.Container.new(root, {
        x: am5.p100,
        centerX: am5.p100,
        dx: -10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        y: 30,
        interactiveChildren: false,
        layout: root.horizontalLayout,
        cursorOverStyle: "pointer",
        background: am5.RoundedRectangle.new(root, {
            fill: am5.color(0xffffff),
            fillOpacity: 0.2
        }),
        visible: false
    }));

    let backLabel = backContainer.children.push(am5.Label.new(root, {
        text: "Back",
        centerY: am5.p50
    }));

    let backButton = backContainer.children.push(am5.Graphics.new(root, {
        width: 32,
        height: 32,
        centerY: am5.p50,
        fill: am5.color(0x555555),
        svgPath: "M12 9.059V6.5a1.001 1.001 0 0 0-1.707-.708L4 12l6.293 6.207a.997.997 0 0 0 1.414 0A.999.999 0 0 0 12 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"
    }));

    backContainer.events.on("click", function () {
        chart.goHome();
        usaSeries.show();
        stateSeries.hide();
        backContainer.hide();
        title.set("text", "United States");
    });

    let title = chart.children.push(am5.Label.new(root, {
        text: "آمریکا",
        x: am5.p50,
        y: 5,
        fontSize: 20,
        textAlign: "center"
    }));

}); // end am5.ready()

// map[ chart end ...