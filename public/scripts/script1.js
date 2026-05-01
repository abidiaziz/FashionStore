const main_slider = $("#main-slider");
main_slider.owlCarousel({
  rtl: false,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  animateOut: "fadeOut", // Add this line for fade-out effect
  animateIn: "fadeIn", // Add this line for fade-in effect
  responsive: {
    0: {
      items: 1,
    },
  },
});

const slider_thumb = $("#slider-thumb");
slider_thumb.owlCarousel({
  rtl: false,
  loop: true,
  margin: 12,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  animateOut: "fadeOut", // Add this line for fade-out effect
  animateIn: "fadeIn", // Add this line for fade-in effect
  responsive: {
    0: {
      items: 2,
    },
  },
});
const main_slider2 = $("#main-slider2");
main_slider2.owlCarousel({
  rtl: true,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,

  responsive: {
    0: {
      items: 1,
    },
  },
});

const slider_thumb2 = $("#slider-thumb2");
slider_thumb2.owlCarousel({
  rtl: false,
  loop: true,
  margin: 12,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  animateOut: "fadeOut", // Add this line for fade-out effect
  animateIn: "fadeIn", // Add this line for fade-in effect
  responsive: {
    0: {
      items: 2,
    },
  },
});

// Custom Navigation Events
//tabs code at home page second section
function openTab(tabId) {
  // Hide all tab content
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  // Show the selected tab content
  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = "block";
}

// Make the first tab active by default
document.addEventListener("DOMContentLoaded", function () {
  const defaultTabId = "tab1"; // Set the ID of the default tab
  openTab(defaultTabId);
});

// Your existing code for tab switching
$(".customNextBtn").click(function () {
  main_slider.trigger("next.owl.carousel");
  slider_thumb.trigger("next.owl.carousel");
});

$(".customPrevBtn").click(function () {
  main_slider.trigger("prev.owl.carousel");
  slider_thumb.trigger("prev.owl.carousel");
});

//navbar functionality
// JavaScript for sticky behavior and background color change
// JavaScript for background color change and sticky navbar
window.addEventListener("scroll", function () {
  const topbar = document.getElementById("topbar");
  const navbar = document.getElementById("navbar");
  const offset = window.scrollY;

  if (offset > 50) {
    topbar.classList.add("bg-gray-600");
    navbar.classList.add("sticky");
  } else {
    topbar.classList.remove("bg-gray-600");
    navbar.classList.remove("sticky");
  }
});

function setMapType(mapType) {
  document.getElementById("mapType").value = mapType;
  document.getElementById("googleMap").style.backgroundColor =
    mapType === "satellite" ? "black" : "white";
}
//dropdown map page
$(document).ready(function () {
  // Initialize select2
  $("#country").select2({
    placeholder: "Search for a country",
    ajax: {
      url: "https://restcountries.com/v3.1/name/{query}",
      dataType: "json",
      delay: 250,
      processResults: function (data) {
        return {
          results: $.map(data, function (country) {
            return {
              text: country.name.common,
              id: country.name.common,
            };
          }),
        };
      },
      cache: true,
    },
  });
});

//faq document.addEventListener('DOMContentLoaded', function () {
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#menu a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#menu ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
