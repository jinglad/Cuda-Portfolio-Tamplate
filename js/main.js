$(document).ready(function(){
    
    $(".js--services-section").waypoint(function(direction){
       if(direction == "down"){
           $("nav").addClass("sticky");
       } else{
            $("nav").removeClass("sticky");
        }
    });

    $(".menu ul li a").click(function(){
        $(".menu ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $("nav .logo a img").click(function(){
        $("nav .logo a img").removeClass("active");
        $(".menu ul li:first-child a").addClass("active");
    });
    
    var mixer = mixitup('.mixi');
});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closenav(){
    document.getElementById("myNav").style.width = "0%";
}