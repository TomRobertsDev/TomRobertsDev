(function( root, $, undefined ) {
	"use strict";

	$(function () {

    /* Handle form submissions */

    $('#contact form').submit(function(){

      /* Send form via AJAX */

      $.ajax({
        url: "https://formspree.io/tomroberts.dev@gmail.com",
        method: "POST",
        data: {message: "hello!"},
        dataType: "json",
        success: function({
          $('#contact').addClass('success');
        });
      });

      /* Show thank you message */

    });


	});

} ( this, jQuery ));

