$(document).ready(function(){
    console.log("document ready")

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


    // change icon when primary menu clicked to active 
    var imgPrimaryMenu = $("#primary-menu div img");
    function activePrimaryMenu(index){
        console.log(imgPrimaryMenu[index].src)
    }

    var activePage = ""
    var tempIcon = ""

    $("#primary-menu div").click(function() {
        if(activePage != $(this)){
            if(activePage != ""){
                activePage[0].children[0].src = tempIcon;
                activePage[0].children[1].style.color = "#494848"
            }else {
                $("#primary-menu div:first-child")[0].children[0].src = "./assets/home.png"
                $("#primary-menu div:first-child")[0].children[1].style.color = "#494848"
            }

            activePage = $(this)
        }
        let pathFile = $(this)[0].children[0].src;
        
       


        let currImg = pathFile.split("/")
        let tempLength = currImg.length;
        let fileName = currImg[tempLength - 1].split(".")
        let activeImg = fileName[0] + "-active.png";

        tempFileName = activeImg.split("-active"); 
        tempIcon = "./assets/" + tempFileName.join("") 


        $(this)[0].children[0].src = "./assets/" + activeImg;
        $(this)[0].children[1].style.color = "#7DCD86"
    })

});