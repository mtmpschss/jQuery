'use strict';

$(function() {
    
    $("p").click(function() {
        $("p").css({"color": "black"});
        $(this).css({"color": "red"});
    });
    
    $("h1").on({
        "click" : function() {
            $(this).css({"color":"orange"});
        },
        "mouseleave" : function() {
            $(this).css({"color":"black"});
        }
    })
    
});