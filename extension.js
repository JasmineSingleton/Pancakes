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



  $(document).keydown(function(event) {
    if (event.code === 'Space') {
      event.preventDefault(); // stops page from jumping when spacebar is pressed

      if (!large && magnify) { // making sure nothing is enlarged
        const thisEnlarge = $(magnify).html(); // getting the HTML

        
        large = $('<div></div>'); // creating a new div element
        large.attr('id', 'large'); 
        large.html(thisEnlarge); // content from what is selected 

        $('body').append(large);
      } else if (large) { 
        large.remove(); // Remove the enlarged content 
        large = null; 
      }
    }
  });
});
});
