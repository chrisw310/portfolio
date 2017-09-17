$(document).ready(function() {

$('body').animate({ // initial
  opacity: "1", // appear
}, 1000, 'easeOutCubic', function() {});

$('content').animate({ // initial
    padding: "10px" // move up
    }, 1000, 'easeOutCubic', function() {});
    
    $('#leftArrow').animate({ // initial
        opacity: "1" // appear
    }, 200, 'easeOutCubic', function() {});
    
});