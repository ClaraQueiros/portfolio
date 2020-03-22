function handleScroll() {
  if (document.documentElement.scrollTop > 200) {
    $(".navbar-logo").addClass('navbar-logo-compact')
    $(".navbar").addClass('navbar-compact')
  } else {
    $(".navbar-logo").removeClass('navbar-logo-compact')
    $(".navbar").removeClass('navbar-compact')
  }
}

$(document).ready(function () {
  window.onscroll = function () { handleScroll() };

  let searchParams = new URLSearchParams(window.location.search)

  if (searchParams.has("section")) {
    const section = searchParams.get("section")
    $([document.documentElement, document.body]).animate({
      scrollTop: $(`.${section}`).offset().top - 100
    }, 200);
  }

  $(".burger").click(function () {
    if ($("#burger-menu").hasClass("hidden")) {
      $("#burger-menu").removeClass('hidden')
      $("#burger-menu").addClass('visible')
      $(".burger").addClass("open")
    } else {
      $("#burger-menu").removeClass('visible')
      $("#burger-menu").addClass('hidden')
      $(".burger").removeClass("open")
    }
  });

  $(".work-link").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".work").offset().top - 100
    }, 200);
    $("#burger-menu").removeClass('visible')
    $("#burger-menu").addClass('hidden')
    $(".burger").removeClass("open")
  });

  $(".about-link").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".about").offset().top - 100
    }, 200);
    $("#burger-menu").removeClass('visible')
    $("#burger-menu").addClass('hidden')
    $(".burger").removeClass("open")
  });

  $(".work-specific").click(function () {
    window.location.replace("./index.html")
    $("#burger-menu").removeClass('visible')
    $("#burger-menu").addClass('hidden')
    $(".burger").removeClass("open")
  });

  $(".about-specific").click(function () {
    window.location.replace("./index.html")
    $("#burger-menu").removeClass('visible')
    $("#burger-menu").addClass('hidden')
    $(".burger").removeClass("open")
  });
});
