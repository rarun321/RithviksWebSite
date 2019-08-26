$(document).ready(function () {
        $("#ProfileImage").hide()
        $("#Name").hide();
        $("#SoftwareDeveloper").hide();
        $("#Logo").hide();
        $("#About").hide();
        $("#Projects").hide();
        $("#Intro").hide();
        $("#Technologies").hide();
        $("#PersonalContact").hide();
   
        $("#PasswordPhrase").hide().fadeIn(1500, function () {
            TypeEffect();
        });
});


    var text = "rithvikarun19";
    var speed = 50;
    var i = 0;

    function TypeEffect() {
        if (i < text.length) {
            document.getElementById("Password").innerHTML += text.charAt(i);
            i++
            setTimeout(TypeEffect, speed)
        }
        else {
            $("#Logo").fadeIn(2000, function () {
                $("#PasswordPhrase").hide()
                $("#Password").hide()
                $("#Logo").hide();

                $("#ProfileImage").fadeIn()
                $("#Name").fadeIn();
                $("#SoftwareDeveloper").fadeIn(function () {
                    $("#About").fadeIn(2000)
                    $("#Projects").fadeIn(2000);
                    $("#Intro").fadeIn(2000);
                    $("#Technologies").fadeIn(2000);
                    $("#PersonalContact").fadeIn(2000);
                });
            })
        }
    }

$("#StreamWorkDot").click(function () {
    $(this).toggleClass("flip");
    $("#StreamWorkDotInner").toggleClass("flipIn")
}); 

function LinkToLinkedIn() {

}