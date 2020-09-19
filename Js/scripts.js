

// jquery to make the pause/play button on the carousel work

$(function() {


    $(".carousel").carousel( { interval: 2000 } );

    $("#carouselButton").click(function(){
        $(".carousel").carousel("pause");
        if ($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-tree");
        }               
         else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-tree");
            $("#carouselButton").children("i").addClass("fa-pause");
        }

    });


    $("#reserveButton").on("click", function(){
        $('#reserveModal').modal("show")
    })
    
    $("#loginButton").on("click", function(){
        $('#loginModal').modal("show")
    })
        
});