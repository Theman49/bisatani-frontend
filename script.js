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

    $('#close-chatbot').click(function() {
        $('#chatbot').css({
            "visibility" : "hidden",
            "opacity" : "0"
        })
        $('#floating-button-chatbot').css({"visibility" : "visible", "opacity" : "1"})
    })

    let ot = $('#topbar-menu')[0].offsetTop
    let ob = $('#primary-menu')[0].offsetTop
    let ht = $("#topbar-menu")[0].offsetHeight
    let height = (ob - ot - ht -10)

    $('#floating-button-chatbot').click(function() {
        console.log(ot,ob, height)
        $('#chatbot').css({
            "visibility" : "visible",
            "opacity" : "1",
            "height" : height,  
            "z-index": "200"
        })

        $(this).css({"visibility": "hidden", "opacity" : "0"})
    })

    $('input#message').focus(function() {
        $('#primary-menu').removeClass("d-flex")
        $('#primary-menu').css("display", "none")
        $('#chatbot').css("height", `calc(${height}px - (${height}px / 2))`)
    });

    $('input#message').focusout(function() {
        $('#primary-menu').addClass("d-flex")
        $('#primary-menu').css("display", "flex")
        $('#chatbot').css("height", `calc(${height}px)`)
    });


    $('.notifikasi-harian .close-notifikasi').click(function() {
        $(this)[0].parentElement.style = "visibility: hidden; opacity: 0"
        setTimeout(() => {
            $(this)[0].parentElement.style = "display: none"
            
        }, 500);
    })

    let panen = ""
    $("#form-panen > div > a.simpan").click(function() {
        if(panen == ""){
            panen = "done"
        }
        console.log(panen)
    })

    $('#tombol-panen:not(.disabled)').click(function() {
        $('#panen-section').css({
            "visibility" : "visible",
            "opacity" : "1"
        })

        $('#LAHANKU .container p.btn[id]').addClass("disabled")

    })

    $('#close-form-panen').click(function() {
        $('#panen-section').css({
            "visibility" : "hidden",
            "opacity" : "0"
        })
        $('#LAHANKU .container p.btn[id]').removeClass("disabled")

        if(panen != ""){
            $("#tombol-panen").addClass("disabled")
        }

    })

    $('#tombol-tambah-lahan').click(function() {
        $('#tambah-lahan-section').css({
            "visibility" : "visible",
            "opacity" : "1"
        })

        $('#LAHANKU .container p.btn[id]').addClass("disabled")
    })

    $('#tombol-tambah-lahan-2').click(function() {
        $('#tambah-lahan-section').css({
            "visibility" : "visible",
            "opacity" : "1"
        })

    })

    $('#close-form-tambah-lahan').click(function() {
        $('#tambah-lahan-section').css({
            "visibility" : "hidden",
            "opacity" : "0"
        })
        
        $('#LAHANKU .container p.btn[id]').removeClass("disabled")

        if(panen != ""){
            $("#tombol-panen").addClass("disabled")
        }
    })

    $('#status-lahan > div > label').click(function() {
        $('#status-lahan > div > label.active').removeClass("active")
        $(this).addClass("active")
    })

    // LAHAN BANYAK
    $('#LAHANKU #show-lahan a').click(function(){
        $("#LAHANKU #show-lahan a.active").removeClass("active")
        $("#LAHANKU .informasi-lahan").css("display", "none")
        let url = (($(this)[0].href).split('#'))[1]
        let selector = "#LAHANKU #" + url
        
        $(selector).css("display", "block")
        $(this).addClass("active")
    })


    // LAHANKU Aktivitas PAGE 2 open
    $("#open-page2").click(function() {
        $("#page2").css({
            "opacity" : "1",
            "visibility" : "visible"
        })
    })

    // LAHANKU Aktivitias PAGE 2 close
    $("#close-page2").click(function() {
        $("#page2").css({
            "opacity" : "0",
            "visibility" : "hidden"
        })
    })

    // show popup pilih lahan dan aktivitas
    function showPopup(name){
        $(name).css({
            "opacity" : "1",
            "visibility" : "visible"
        })
    }

    $("#pilihLahan").click(function () {
        showPopup('#popup-lahan')}
    );
    $("#pilihAktivitas").click(function () {
        showPopup('#popup')}
    );

    // Page LAHANKU tab aktivitas popup pilih aktivitas
    function chooseItem(input, popup, getValue){
        $(input)[0].value = getValue;

        $(popup).css({
            "opacity" : "0",
            "visibility" : "hidden"
        })

    }
    $("#select-option-lahan ul li").click(function(){
        let value = $(this).text();
        chooseItem("#pilihLahan", "#popup-lahan", value)
    });
    $("#select-option ul li").click(function() {
        let value = $(this).text();
        chooseItem("#pilihAktivitas", "#popup", value)
    });

    // Close popup pilih aktivitas dan lahan
    function closePopup(name){
        $(name).css({
            "opacity" : "0",
            "visibility" : "hidden"
        })
    }
    $("#popup-lahan #close-popup-lahan").click(function() {
        closePopup("#popup-lahan")
    });
    $("#popup #close-popup").click(function() {
        closePopup("#popup")
    });



    // Riwayat Lahan
    $("#container-riwayat-lahan button:not([disabled])").click(function(){
        document.location.href = "./detail-riwayat-lahan.html";
    })

});