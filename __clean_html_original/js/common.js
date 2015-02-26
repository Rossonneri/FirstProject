$(document).ready(function() {
function heightDetect(){
	$(".main_head").css("height", $(window).height());
}
	heightDetect();
$(window).resize(function(){
	heightDetect();
});

$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".top-mnu ul a").click(function(){
  $(".top-mnu").fadeOut(600);
  $(".sandwich").toggleClass("active");
}).append("<span>");

$(".toggle_mnu").click(function(){
  if ($(".top-mnu").is(":visible")){
  $(".top_text").removeClass("h_opacity");
  $(".top-mnu").fadeOut(600);
  $(".top-mnu li a").removeClass("fadeInUp animated")
} else {
  $(".top_text").addClass("h_opacity");
  $(".top-mnu").fadeIn(600);
  $(".top-mnu li a").addClass("fadeInUp animated")
};
});
});
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});