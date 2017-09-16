$(document).ready(function() {
    
$('content *').animate({ // initial
    opacity: "1", // appear
    padding: "10px" // move up
    }, 1000, 'easeOutCubic', function() {});
    
    $('#leftArrow').animate({ // initial
        opacity: "1" // appear
    }, 200, 'easeOutCubic', function() {});
    
});