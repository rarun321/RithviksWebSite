$(document).ready(function () {

});


var text = "";
var speed = 50;
var i = 0;

function SetText(t) {
    text = t
    TypeEffect();
}

function TypeEffect() {
    if (i < text.length) {
        document.getElementById("Coronado").innerHTML += text.charAt(i);
        i++
        setTimeout(TypeEffect, speed)
    }
}



//$("#StreamWorkDot").click(function () {
//    $(this).toggleClass("flip");
//    $("#StreamWorkDotInner").toggleClass("flipIn")
//}); 

//function LinkToLinkedIn() {

//}