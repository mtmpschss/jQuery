'use strict';

//
//var p = $("body").find("p");
//
//console.log(p);


var body = $("body");
var par = body.find("p"); // zwraca wszyskie paragrafy
var par2 = body.find("p").eq(1); // zwraca paragraf o indeksie 1
console.log(par);



$("p").each(function(index) {
    console.log($(this));
    $(this).addClass("paragraf-" + index);
});