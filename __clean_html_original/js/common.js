$(document).ready(function() {
 // $(".top-mnu ul a").mPageScroll2id();

$("#portfolio_grid").mixItUp();

$(".s_portfolio li").click(function(){
  $(".s_portfolio li").removeClass("active");
  $(this).addClass("active");
});

$(".popup").magnificPopup({type: 'image'});
$(".popup_content").magnificPopup({type: 'inline', midClick: true});


$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
$(".animation_left").animated("fadeInLeft", "fadeOutLeft");
$(".animation_photo").animated("flipInY", "flipOutY");
$(".animation_right").animated("fadeInRight", "fadeOutRight");

$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
$(".right .resume_item").animated("fadeInRight", "fadeOutRight");

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

$("input,select,textarea").jqBootstrapValidation();




$(".portfolio_item").each(function(i) {
    $(this).find("a").attr("href", "#work_" + i);
    $(this).find(".port_descr").attr("id", "work_" + i);
  });

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});