$(document).ready(function(){

    // show sidebar-menu
    $("#topbar-menu .icon-menu").click(function() {
        $("#sidebar-menu").css("transform", "translate(0, 0)");
    });

    // close sidebar-menu
    $("#sidebar-menu .icon-menu").click(function() {
        $("#sidebar-menu").css("transform", "translate(70vw, 0)");
    });

    // add active class when sidemar-menu list click
    $("#sidebar-menu li").click(function() {
        $(".active-sidebar").removeClass("active-sidebar");
        $(this).addClass("active-sidebar");
    });

    // toggle notification
    $("#icon-notification").click(function() {
        $("#notification-section").toggle(1000, function(){
            $(this).css({"visibility" : "visible", "transform" : "translateY(0)"});
        })
    })

    // remove notification list when clicked 
    $("#notification-section ul li").click(function() {
        $(this).remove();
    })


});