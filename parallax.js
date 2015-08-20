function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++) {
    if (allElements[i].getAttribute(attribute) !== null) {
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

// Requires IE 9 or later
document.addEventListener("DOMContentLoaded", function(event) {
  matchingElements = getAllElementsWithAttribute("parallax");
  for (var i=0; i<matchingElements.length; i++) {
    (function() {
      var scroll = matchingElements[i];
      window.addEventListener("scroll", function() {
        var yPos = -(document.body.scrollTop * scroll.getAttribute("parallax-speed") / 10.0); 
        var coords = '50% '+ yPos + 'px';
        scroll.style.backgroundPosition = coords;
      });
    })();
  }
});