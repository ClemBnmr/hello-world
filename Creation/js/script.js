$(document).ready(function() {

    $("#epaves a").click(function(){
        $("img#egg").slideToggle();
        // $("img#egg").css("border","2px solid black");
    });

    $("#hamburger").click(function(){
      $("#liste").fadeToggle();
      $("#bar").fadeToggle();
    });
});
