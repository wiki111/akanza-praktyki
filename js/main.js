function showMenu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
$(document).ready(function(){
    $(document).on("scroll", onScroll);
    
    $('#logo, #start').click(
        function(event){
            $('html,body').animate({scrollTop: 0}, 'fast');
            var x = document.getElementById("menu");
            if(x.className === "menu responsive")
            {
                x.className = "menu"; 
            }
            return false;
        }
    );
});

function onScroll(event){
    var currentPosition = $(document).scrollTop();
    $('#menu ul li a').each(function() {
       var currentLink = $(this);
       var referenceElement = $(currentLink.attr("href"));
       var top = referenceElement.position().top - 200;
       if ( top <= currentPosition) {
            $('#menu ul li a').removeClass("red");
            currentLink.addClass("red");
        }
        else{
            currentLink.removeClass("red");
        }
    });
}

function scrollToDiv(div){	
    var offset = $('#'+div).offset().top;
    var offset = offset - 80;	
    $('html,body').animate({scrollTop: offset});	
    var x = document.getElementById("menu");
    if(x.className === "menu responsive"){
        x.className = "menu";
    } 
}