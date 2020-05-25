// //index.js
$(document).ready(function() {
  $("#scroll-1").click(function() {
    console.log('clicked');
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#experiences").offset().top
    }, 1000, 'easeOutExpo');
  });
});