function showMenu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
$(document).ready(function(){
    $('#logo, #start').click(
        function(event){
            $('html,body').animate({scrollTop: 0}, 'fast');
            var x = document.getElementById("menu");
            if(x.className === "menu responsive")
            {
                x.className = "menu"; 
            }
            return false;});
});
function scrollToDiv(div){	
    var offset = $('#'+div).offset().top;
    var offset = offset - 80;	
    $('html,body').animate({scrollTop: offset});	
    var x = document.getElementById("menu");
    if(x.className === "menu responsive"){
        x.className = "menu";
    }  
}