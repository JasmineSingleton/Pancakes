let large = null; 
let zoom = 1.0; // zoom level
let magnify = null; 

$(document).ready(function() {
  // zooming in and out
  $(document).keydown(function(event) { //browser zoom
    if (event.key === '-') { // zoom out when minus and equal sign is pressed
      zoom = Math.max(zoom - 0.1, 0.1); // setting max zoom
      $('body').css('zoom', zoom); 
    }
    if (event.key === '=') { 
      zoom += 0.1;
      $('body').css('zoom', zoom);
    }
  
  $("*:not(body)").hover(
    function (ev) {

      $(this).addClass("highlight");

      var spokenWord = $(this).text();
      var altText = $(this).attr("alt")
      var srcofimg = $(this).attr("src");

      if (spokenWord){ // Speaks the text 
        speechSynthesis.speak(new SpeechSynthesisUtterance(spokenWord));
        }

      else if (altText){ // Speaks the alt text if there is some
        speechSynthesis.speak(new SpeechSynthesisUtterance(altText));
        }

      else if (srcofimg){  // Speaks the image source if there is no alt text or spokenWord
        speechSynthesis.speak(new SpeechSynthesisUtterance(srcofimg));
        }
      },

    function () {
      $(this).removeClass("highlight");
        speechSynthesis.cancel();

      }
    );
    document.addEventListener('keydown', function (e) {

      if (e.code == 'Space' ) { // Checking for spacebar and stopping the page from jumping
          e.preventDefault(); 

          if (speechSynthesis.speaking) { // Canceling the speech synthesis if it's on
              speechSynthesis.cancel();
      
          } else {
              speechSynthesis.speak(new SpeechSynthesisUtterance($(this).text()));
          }

      } else {
          
          speechSynthesis.cancel();
          $(".highlight").removeClass("highlight");
      }
    });
  });
});
