function call() {
 	  var msg   = $('contact-form').serialize();
        $.ajax({
          type: 'POST',
          url: 'http://formspree.io/cypherian09@gmail.com',
          data: msg,
          success: function(data) {
            $('#results').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }