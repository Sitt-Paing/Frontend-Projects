$("document").ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $(".header").addClass("h_active");
      $(".h_link").css("color", "#1e1e1e");
      $(".logo").addClass("logo_active");
      $(".menu span").css("background-color", "#1e1e1e");

    } else {
      $(".header").removeClass("h_active");
      $(".h_link").css("color", "#fff");
      $(".logo").removeClass("logo_active");
      $(".menu span").css("background-color", "#fff");
    }
  });
  $(".menu").on("click", function () {
    $(".menu").toggleClass("close-btn");
    $(".header .gnav").toggleClass("open-menu");

    //if($(".header").hasClass("h_active")){
    //  $(".open-menu .gnav .h_link").css("color", "#000");
    //} else {
    //  $(".open-menu .gnav .h_link").css("color", "#000");
    //  $(".h_link").css("color", "#000");
    //}
  });
});