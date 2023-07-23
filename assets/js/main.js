(function ($) {
    "use strict";

/*---------------------------------
    Variables
-----------------------------------*/
var $window = $(window);
var $body = $('body');

$(".alert-dismissible").click(function(){
  $(this).parents('.click-none').addClass('active');
});

/*---------------------------------
    Notification Dropdown
-----------------------------------*/
if ($('.ht_dropdown').length) {
    var $main_dropdown = $('.ht_dropdown'),
        $main_dropdownMenu = $main_dropdown.find('.dropdown-menu-notice');

    $main_dropdown.on('click', '.toggle', function(e){
        e.preventDefault();
        var $this = $(this);
        if(!$this.parent().hasClass('show')) {
            $main_dropdown.removeClass('show');
            $main_dropdownMenu.removeClass('show');
            $this.siblings('.dropdown-menu-notice').addClass('show').parent().addClass('show');
        } else {
            $this.siblings('.dropdown-menu-notice').removeClass('show').parent().removeClass('show');
        }
    });
    /*Close When Click Outside*/
    $body.on('click', function(e){
        var $target = e.target;
        if (!$($target).is('.ht_dropdown') && !$($target).parents().is('.ht_dropdown') && $main_dropdown.hasClass('show')) {
            $main_dropdown.removeClass('show');
            $main_dropdownMenu.removeClass('show');
        }
    });
}

/*---------------------------------
    Sidebar Menu
-----------------------------------*/
var $sidebarMenuToggle = $('.side-menu-toggle'),
    $sideMenuClose = $('.side-menu-close'),
    $sideMenuHeader = $('.ht-menu');

/*AdjustWidth*/
function $sideMenuHeaderClassToggle() {
    var $windowWidth = $window.width();
    if( $windowWidth >= 992 ) {
        $sideMenuHeader.removeClass('hide').addClass('show');
    } else {
        $sideMenuHeader.removeClass('show').addClass('hide');
    }
}
$sideMenuHeaderClassToggle();
$sidebarMenuToggle.on('click', function(){
    if($sideMenuHeader.hasClass('show')){
        $sideMenuHeader.removeClass('show').addClass('hide');
    } else {
        $sideMenuHeader.removeClass('hide').addClass('show');
    }
});
$sideMenuClose.on('click', function(){
    $sideMenuHeader.removeClass('show').addClass('hide');
});

/*---------------------------------
    Mobile Header Nav
-----------------------------------*/
var $mobileMenuToggle = $('.mobile-menu-toggle'),
    $mobileMenuClose = $('.mobile-menu-close'),
    $mobileMenuHeader = $('.header_notification');

/*AdjustWidth*/
function $mobileMenuHeaderClassToggle() {
    var $windowWidth = $window.width();
    if( $windowWidth >= 992 ) {
        $mobileMenuHeader.removeClass('hide').addClass('show');
    } else {
        $mobileMenuHeader.removeClass('show').addClass('hide');
    }
}
$mobileMenuHeaderClassToggle();
$mobileMenuToggle.on('click', function(){
    if($mobileMenuHeader.hasClass('show')){
        $mobileMenuHeader.removeClass('show').addClass('hide');
    } else {
        $mobileMenuHeader.removeClass('hide').addClass('show');
    }
});
$mobileMenuClose.on('click', function(){
    $mobileMenuHeader.removeClass('show').addClass('hide');
});
/*---------------------------------
    Mobile Search Box
-----------------------------------*/
var $headerSearchOpen = $('.search_button'),
    $headerSearchClose = $('.header-search-close'),
    $headerSearchForm = $('.header_search');
$headerSearchOpen.on('click', function(){
    $headerSearchForm.addClass('show');
});
$headerSearchClose.on('click', function(){
    $headerSearchForm.removeClass('show');
});


/*---------------------------------
    Side Header Menu
-----------------------------------*/
var $sidebarNavMenu = $('.ht-menu-menu'),
    $sideSubMenu = $sidebarNavMenu.find('.ht-menu-sub-menu');

/*Canvas Sub Menu*/
$sideSubMenu.slideUp();

/*Sidebar Sub Menu Toggle*/
$sidebarNavMenu.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( $this.parent('li').hasClass('has-sub-menu') || ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length){
            $this.parent('li').removeClass('active').children('ul').slideUp().siblings('a');
            $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a');
        } else {
            $this.parent('li').addClass('active').children('ul').slideDown().siblings('a');
            $this.parent('li').siblings('li').removeClass('active').find('ul:visible').slideUp().siblings('a');
        }
    }
});


/*---------------------------------
    Chart Js Graph
----------------------------------*/

/*Responsive Sales by Social Media Graph*/
var ctx3 = document.getElementById('myChart3').getContext('2d');
var chart3 = new Chart(ctx3, {
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
                    color: '#b9b9b94d',
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

/*Donut Chart*/
var ctx14 = document.getElementById("donutChart");
var donutChart = new Chart(ctx14, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablets'],
    datasets: [{
      label: '',
      data: [45, 45, 20],
      backgroundColor: [
        '#CD2BDF',
        '#8B33FF',
        '#5628F2'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    cutoutPercentage: 17,
    legend: {
        display: false
    },
    title: {
        display: false,
    }
  }
});
/*Donut Chart*/
var ctx15 = document.getElementById("donutChart2");
var donutChart2 = new Chart(ctx15, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablets'],
    datasets: [{
      label: '',
      data: [35, 35, 40],
      backgroundColor: [
        '#CD2BDF',
        '#8B33FF',
        '#5628F2'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    cutoutPercentage: 17,
    legend: {
        display: false
    },
    title: {
        display: false,
    }
  }
});
/*Donut Chart*/
var ctx16 = document.getElementById("donutChart3");
var donutChart3 = new Chart(ctx16, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablets'],
    datasets: [{
      label: '',
      data: [25, 25, 60],
      backgroundColor: [
        '#CD2BDF',
        '#8B33FF',
        '#5628F2'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    cutoutPercentage: 17,
    legend: {
        display: false
    },
    title: {
        display: false,
    }
  }
});
/*Donut Chart*/
var ctx17 = document.getElementById("donutChart");
var donutChart4 = new Chart(ctx17, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablets'],
    datasets: [{
      label: '',
      data: [45, 45, 20],
      backgroundColor: [
        '#CD2BDF',
        '#8B33FF',
        '#5628F2'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    cutoutPercentage: 17,
    legend: {
        display: false
    },
    title: {
        display: false,
    }
  }
});
/*Donut Chart*/
var ctx18 = document.getElementById("donutChart2");
var donutChart5 = new Chart(ctx18, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablets'],
    datasets: [{
      label: '',
      data: [35, 35, 40],
      backgroundColor: [
        '#CD2BDF',
        '#8B33FF',
        '#5628F2'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    cutoutPercentage: 17,
    legend: {
        display: false
    },
    title: {
        display: false,
    }
  }
});
/*Donut Chart*/
var ctx19 = document.getElementById("donutChart3");
var donutChart6 = new Chart(ctx19, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablets'],
    datasets: [{
      label: '',
      data: [25, 25, 60],
      backgroundColor: [
        '#CD2BDF',
        '#8B33FF',
        '#5628F2'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: false,
    cutoutPercentage: 17,
    legend: {
        display: false
    },
    title: {
        display: false,
    }
  }
});

/*---------------------------------
    Easy Pie Chart
-----------------------------------*/
$('.piechart').easyPieChart({
    barColor: "#8B33FF",
    trackColor: "#ECECEC",
    scaleColor: "transparent",
    size: 233,
    lineWidth: 25,
});
$('.piechart2').easyPieChart({
    barColor: "#CD2BDF",
    trackColor: "#ECECEC",
    scaleColor: "transparent",
    size: 195,
    lineWidth: 25,
});
$('.piechart3').easyPieChart({
    barColor: "#8B33FF",
    trackColor: "#011D7B",
    scaleColor: "transparent",
    size: 233,
    lineWidth: 25,
});
$('.piechart4').easyPieChart({
    barColor: "#CD2BDF",
    trackColor: "#011D7B",
    scaleColor: "transparent",
    size: 195,
    lineWidth: 25,
});

const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {

  // deactivate existing active tabs and panel

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }


  // activate new tabs and panel
  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}


const dtabs = document.querySelectorAll(".dtabs");
const dtab = document.querySelectorAll(".dtab");
const dpanel = document.querySelectorAll(".dtab-content");

function ondTabClick(event) {

  // deactivate existing active tabs and panel

  for (let j = 0; j < dtab.length; j++) {
    dtab[j].classList.remove("active");
  }

  for (let j = 0; j < dpanel.length; j++) {
    dpanel[j].classList.remove("active");
  }


  // activate new tabs and panel
  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('dpanels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let j = 0; j < dtab.length; j++) {
  dtab[j].addEventListener('click', ondTabClick, false);
}

/*----------------------------
    Price slider
---------------------------- */
var sliderrange = $('#slider-range');
var amountprice = $('#amount');
$(function() {
    sliderrange.slider({
        range: true,
        min: 16,
        max: 400,
        values: [0, 300],
        slide: function(event, ui) {
            amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    amountprice.val("$" + sliderrange.slider("values", 0) +
        " - $" + sliderrange.slider("values", 1));
});

/*--
    Custom Scrollbar (Perfect Scrollbar)
-----------------------------------*/ 
$('.custom-scroll').each( function() {
    var ps = new PerfectScrollbar($(this)[0]);
});



})(jQuery);

