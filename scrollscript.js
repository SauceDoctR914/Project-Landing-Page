$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".navbar").css("background", "#754ede");
    } else {
      $(".navbar").css("background", "");
    }
  });
});
