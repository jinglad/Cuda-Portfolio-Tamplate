$(document).ready(function(){
    
    $(".js--services-sectio").waypoint(function(direction){
       if(direction=="down"){
           $("nav").addClass("sticky");
       } 
        else{
            $("nav").removeClass("sticky");
        }
    });
    
    var mixer = mixitup('.mixi');
});