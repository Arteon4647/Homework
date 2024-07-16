$(document).ready(function() {
    let counter = 0;
  
    $('#counter-button').click(function() {
      counter++;
      $('#counter-value').text(counter);
  
      if (counter > 20) {
        $('body').fadeOut(1000, function() {
          $(this).addClass('hidden');
        });
      } else if (counter > 10) {
        $('#counter-button').fadeOut(1000);
      } else if (counter < -10) {
        counter = 0;
        $('#counter-value').text(counter);
      }
    });
  });