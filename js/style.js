$(document).ready(function() {
  $(".menu_toggle").on("click", function(){
    $(".menu_toggle").toggleClass("close-btn");
    $(".gnav").toggleClass("open-menu");
  });
});