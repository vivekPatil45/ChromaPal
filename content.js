// Extract colors from the webpage
function extractColors() {
    var elements = document.querySelectorAll('*');
    var colors = [];
  
    elements.forEach(function(element) {
      var color = window.getComputedStyle(element).color;
      if (color !== 'rgba(0, 0, 0, 0)' && !colors.includes(color)) {
        colors.push(color);
      }
  
      var bgColor = window.getComputedStyle(element).backgroundColor;
      if (bgColor !== 'rgba(0, 0, 0, 0)' && !colors.includes(bgColor)) {
        colors.push(bgColor);
      }
    });
  
    return colors;
  }
  
  // Send colors to extension
  chrome.runtime.sendMessage({
    type: 'colors',
    colors: extractColors()
  });
  