// smooth mouse scroll
$(document).ready(function() {
  $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  });
});

//loading screen
// $(window).on('load', function(){
//       //turn the display of load animation screen to none
//       document.getElementById("load").style.animationName = "fade_out";
//       document.getElementById("load").style.animationDuration = "5s";
//       // turn the body display to visible
//       setTimeout(function () {
//         document.getElementById("load").style.display = "none";
//         document.getElementById("body").style.display = "block";
//         document.getElementById("body").style.animationName = "showBody";
//         document.getElementById("body").style.animationDuration = "5s";
//       }, 4000);
//   });
