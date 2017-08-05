/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function () {
  
});

jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
};

$(document).scroll(function () {
  if (typeof document.body.scrollTop == typeof 0 && document.body.scrollTop <= 0) {
    $("#arrow").fadeIn("fast");
  } else {
    $("#arrow").fadeOut("fast");
  }
  //pJSDom[0].pJS.particles.move.enable = true;
  //pJSDom[0].pJS.fn.particlesRefresh();
  
  // pJSDom[0].pJS.particles.move.enable = false;
  
});

$('section').on('click',function() {
  if ($(this).is('#teledr')) {
    window.location.href = 'teledr.html';
  } else if ($(this).is('#depicture')) {
    window.location.href = 'portfolioA.html';
  } else if ($(this).is('#bubbler')) {
    window.location.href = './Bubbler/bubbler.html';
  } else if ($(this).is('#misc')) {
    window.location.href = 'misc.html';
  }
});