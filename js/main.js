$( document ).ready(function() {
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
    
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
    
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
    
      } // End if
    
    });
  
  
    $(window).scroll(function() {
      var wScroll = $(this).scrollTop();
      // $("nav").css({
      //     'transform': 'translate(0px, ' + wScroll / 1 + '%)'
      // });
      if (wScroll > 10) {
      $('nav.navAlign').css({
          'opacity': wScroll/60 + .0
      })
  }else{
      $('nav.navAlign').css({
          'opacity': '.0'
      })
  }
})
})