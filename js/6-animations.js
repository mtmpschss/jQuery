'use strict';

$(function() {
    
//$("p").click(function() {
//    $(this).hide(2000, function(){
//        alert("hide skonczony");
//    }).show(2000);
//});
    
//    $("h1").fadeOut(3000).fadeIn(3000);
//    
//    $("h2").slideUp(3000).slideDown(3000);
    
    function animacja() {
        console.log("No i dotarlismy do konca animacji. tu sie wywoluje funckcja callback");
        $("h3").animate({"font-size":"10px", "margin-left":"0px"}, 3000);
    }
    
    $("h3").animate({"font-size":"30px", "margin-left":"100px"}, 4000, animacja);
    
  });