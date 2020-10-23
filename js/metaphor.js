// Metaphor JS

/*
 * ------------------
 * Define Some Colors
 * ------------------
 */

var $redActive = "#FF7878",
  $blueActive = "#706AF4",
  $greenActive = "#71AD70",
  $brownActive = "#B16666",
  $lightBlueActive = "#269abc",
  $yellowActive = "#AAA900",
  $orangeActive = "#F8BC88",
  $violetActive = "#C29DE7",
  $textColor = "#565656",
  $defultColor = "#1fb5ad",
  $defultBorder = "#E3DFD8",
  $lightGreen = "#1fb5ad",
  $gridBorder = "#DEDEDE",
  $black = "#3F414D",
  $success = "#5CB85C",
  $info = "#5bc0de";
//Chart

var $fillColor1 = "rgba(220,220,220,0.5)",
  $fillColor2 = "rgba(93, 184, 92, 0.35)",
  $fillColor3 = "rgba(255, 120, 120, 0.35)",
  $fillColor4 = "rgba(93, 184, 92, 0.35)",
  $fillColor5 = "rgba(255, 120, 120, 0.76)",
  $fillColor6 = "rgba(91, 194, 222, 0.9)",
  $fillColor7 = "rgba(239, 174, 77, 0.71)",
  $blueFillColor = "rgba(38, 156, 188, 0.5)",
  $lightGreenFillColor = "rgba(31, 181, 174, 0.5)",
  $strokeColor = "rgba(220,220,220,1)",
  strokeColor2 = "rgba(204, 204, 204, 0.91)";

//Chat color
var $isOnline = "#2ecc71",
  $isIdle = "#F7D227",
  $isBusy = "#FF7878",
  $isOffline = "#A0A0A0";

$(window).load(function () {
  // executes when complete page is fully loaded, including all frames, objects and images

  setTimeout(function () {
    $("#page-loader").fadeOut();
  }, 1000);
}); // End Window.load

$(function () {
  /*
   * Remove loading if clicked
   */

  $("#page-loader").click(function () {
    setTimeout(function () {
      $("#page-loader").fadeOut();
    }, 600);
  });

  /*
   * ---------------------------
   * Initialize Chart.js Plugin
   * ---------------------------
   */

  var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
  };
  var lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset A",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
      {
        label: "Dataset B",
        fillColor: "rgba(141,212,138,0.2)",
        strokeColor: "rgba(141,212,138,1)",
        pointColor: "rgba(141,212,138,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
    ],
  };

  window.onload = function () {
    var ctx = document.getElementById("line-graph").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
      responsive: true,
      maintainAspectRatio: false,
    });
  };

  /*
   * -------------------------
   * Initialize Flot Chart JS
   * -------------------------
   */

  // We use an inline data source in the example, usually data would
  // be fetched from a server

  var data = [],
    totalPoints = 300;

  function getRandomData() {
    if (data.length > 0) data = data.slice(1);

    // Do a random walk

    while (data.length < totalPoints) {
      var prev = data.length > 0 ? data[data.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }

      data.push(y);
    }

    // Zip the generated y values with the x values

    var res = [];
    for (var i = 0; i < data.length; ++i) {
      res.push([i, data[i]]);
    }

    return res;
  }

  // Set up the control widget

  var updateInterval = 30;
  var realtimeGraph = $("#realtime-graph");

  plot = $.plot(realtimeGraph, [getRandomData()], {
    series: {
      lines: {
        show: true,
        lineWidth: 1,
        fill: true,
        fillColor: {
          colors: [
            {
              opacity: 0.2,
            },
            {
              opacity: 0.1,
            },
          ],
        },
      },
      shadowSize: 0,
    },
    colors: ["#1fb5ad"],

    yaxis: {
      min: 0,
      max: 150,
    },

    xaxis: {
      show: false,
    },
    grid: {
      tickColor: $fillColor1,
      borderWidth: 0,
      hoverable: true,
    },
  });

  function update() {
    plot.setData([getRandomData()]);
    // Since the axes don't change, we don't need to call plot.setupGrid()
    plot.draw();
    setTimeout(update, updateInterval);
  }
  update();

  /*
   * ---------------------------
   * Initialize jqvmaps - World Map
   * ---------------------------
   */

  jQuery("#world-map").vectorMap({
    map: "world_en",
    backgroundColor: null,
    color: "#ffffff",
    hoverOpacity: 0.7,
    selectedColor: "#1fb5ad",
    enableZoom: false,
    showTooltip: true,
    values: sample_data,
    scaleColors: ["#b6d6ff", "#005ace"],
    normalizeFunction: "polynomial",
    regionClickEvent: false,
  });
}); // End Jquery Function

$(document).ready(function () {
  // executes when HTML-Document is loaded and DOM is ready
  // Detect touch screen and enable scrollbar if necessary

  function is_touch_device() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  if (is_touch_device()) {
    $("#nav-mobile").css({
      overflow: "auto",
    });
  }

  // Initialize collapse button
  $(".button-collapse").sideNav({
    edge: "left",
  });
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $(".collapsible").collapsible();

  // Initialize dropdown button
  $(".dropdown-button").dropdown({
    //hover: false, // Activate on click
    //belowOrigin: true
  });

  // Initialize Select
  $("select").material_select();

  // Initialize Scrollbar Plugin
  $(".perfect-scrollbar").perfectScrollbar({
    //maxScrollbarLength:'500'
  });

  $(".sidebar-toggle").click(function () {
    $("#sidenav-overlay").trigger("click");
  });

  // Show Search bar

  $(".search-toggle").click(function () {
    $(".search-bar").toggleClass("active");
    $(".search-bar input").focus();
    $(".search-result").fadeIn();
    //$('body').css('overflow','hidden');
    setTimeout(function () {
      showStaggeredList("#staggered-list");
    }, 600);
  });

  $(".search-close").click(function () {
    $(".search-bar").removeClass("active");
    //$('body').removeAttr('style');
    $(".search-result").fadeOut();
    hideStaggeredList("#staggered-list");
  });

  function hideStaggeredList(id) {
    var time = 0;
    $(id)
      .find("li")
      .each(function () {
        $(this).velocity(
          {
            opacity: "0",
            translateX: "-100px",
          },
          {
            duration: 800,
            delay: time,
            easing: [60, 10],
          }
        );
        time += 120;
      });
  }

  /*
   * ---------------------------
   * Sparkline Graph in Map
   * ---------------------------
   */

  $(".sparkline-map").sparkline("html", {
    type: "line",
    lineColor: "#e68033",
    fillColor: "#ffe3ce",
    highlightSpotColor: "#ff0000",
    disabledHiddenCheck: true,
  });

  $(".sparkline-bar").sparkline("html", {
    type: "bar",
    height: "80",
    barWidth: 5,
    zeroAxis: false,
    negBarColor: "#db5e68",
    zeroColor: "#4bae4f",
  });

  /*
   * ---------------------------
   * jQuery Knob
   * ---------------------------
   */

  /*$(".dial").knob({
      'draw' : function () { 
        $(this.i).val(this.cv + '%')
	  }
 });
*/
  $(".donutchart1").donutchart({
    bgColor: "#eeeeee",
    fgColor: "#298dc6",
    size: 100,
    donutwidth: 4,
    textsize: 25,
  });
  $(".donutchart2").donutchart({
    bgColor: "#eeeeee",
    fgColor: "#dc636b",
    size: 100,
    donutwidth: 4,
    textsize: 25,
  });
  $(".donutchart3").donutchart({
    bgColor: "#eeeeee",
    fgColor: "#07a581",
    size: 100,
    donutwidth: 4,
    textsize: 25,
  });
  $(".donutchart1, .donutchart2, .donutchart3").donutchart("animate");
}); // End Document.ready

$(window).load(function () {
  // executes when complete page is fully loaded, including all frames, objects and images

  startKnob = function () {
    $(".dial").animate(
      {
        value: $(this).data("number"),
      },
      {
        duration: 950,
        easing: "swing",
        progress: function () {
          $(".dial").val(Math.round(this.value)).trigger("change");
        },
      }
    );
  };

  $(document).scroll(function () {
    $(".animate-knob").bind("inview", startKnob);
  });
}); // End Window.load
