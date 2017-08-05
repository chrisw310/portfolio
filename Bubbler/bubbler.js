$(document).ready(function() {
    $('.bodywrap').css("opacity", "0"); 
    $('.bodywrap').animate({ // initial
    opacity: "1", // appear
    }, 1000, 'easeOutCubic', function() {});
});