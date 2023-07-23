/*Dark User Hit Rate & Sales Graph*/
var ctx44 = document.getElementById('myChart4').getContext('2d');
var chart4 = new Chart(ctx44, {
	type: 'line', 
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "",
                backgroundColor: 'transparent',
                borderColor: '#8B33FF',
                pointStrokeColor: "#fff",
                borderWidth: 4,
                data: [74.8, 55.8, 63.8, 59.4, 80.6, 59.2, 67.4, 49.8, 64.8, 56, 76.8, 60.6],
                pointBackgroundColor: ["transparent"],
                pointBorderColor: ["transparent"],
                pointBorderWidth: 0,
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#8B33FF",
                pointHoverBorderWidth: 4
		    },
            {
                label: "",
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                pointStrokeColor: "#fff",
                borderDash: [5,5],
                borderWidth: 1,
                data: [60.4, 39.8, 56.8, 46.4, 60.6, 35.2, 57.4, 30., 47.8, 36, 67.8, 50.6],
                pointBackgroundColor: ["transparent"],
                pointBorderColor: ["transparent"],
                pointBorderWidth: 0,
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#8B33FF",
                pointHoverBorderWidth: 1
		    }
        ]
	},
	options: {
        responsive: true,
        maintainAspectRatio: false,
        hitRadius : 0,
        layout: {
            padding: 10,
        },
		legend: {
            display: false
		},
		title: {
			display: false,
		},
		scales: {
			yAxes: [{
                gridLines: {
                    color: 'rgba(255,255,255,.06)',
                    zeroLineColor: 'transparent',
                    offset: false
                },
                ticks: {
                    fontColor: "#6E7BCF",
                    fontSize: 12,
                }
			}],
			xAxes: [{
                gridLines: {
                    display: false,
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    maxTicksLimit: 5,
                },
			}]
		},
        tooltips: {
          cornerRadius: 0,
          caretSize: 0,
          xPadding: 16,
          yPadding: 10,
          backgroundColor: '#8B33FF',
          titleFontStyle: 'normal',
          titleMarginBottom: 15
        }
	}
});

/*Dark Sales by Social Media Graph*/
var ctx55 = document.getElementById('myChart5').getContext('2d');
var chart5 = new Chart(ctx55, {
	type: 'line', 
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: "",
                backgroundColor: "#8B33FF",
                borderColor: '#8B33FF',
                pointStrokeColor: "#fff",
                pointHighlightFill: "transparent",
                pointHighlightStroke:  false,
                data: [77, 65, 70, 61, 65, 60, 65, 50],
                pointBackgroundColor: ["transparent"],
                pointBorderColor: ["transparent"],
                pointBorderWidth: 0,
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#8B33FF",
                pointHoverBorderWidth: 4
		    }
        ]
	},
	options: {
        hitRadius : 0,
        layout: {
            padding: {
                top: 20,
                left: 10,
                right: 10,
                bottom:0
            },
        },
		legend: {
            display: false
		},
		title: {
			display: false,
		},
		scales: {
			yAxes: [{
                gridLines: {
                    color: 'rgba(255,255,255,.06)',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    display: false,
                }
			}],
			xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    maxTicksLimit: 5,
                },
			}]
		},
        tooltips: {
          cornerRadius: 0,
          caretSize: 0,
          xPadding: 16,
          yPadding: 10,
          backgroundColor: '#8B33FF',
          titleFontStyle: 'normal',
          titleMarginBottom: 15
        }
	}
});