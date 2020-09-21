$(document).ready(function () {
  let $btns = $(".button_group button");

  $btns.click(function (e) {
    $(".button_group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project_area .grid").isotope({
      filter: selector,
    });
    return false;
  });

  $("#btn1").trigger("click");

  $(".grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  //   Owl-carousel

  $(".about_me_area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  // sticky navigation manu

  let nav_offset_top = $(".header_area").height + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main_menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main_menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
});
