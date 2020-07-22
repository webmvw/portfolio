
(function($){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  

  $(document).ready(function() { 

    // portfolio mixitup  
    $('.portfolio_item').mixItUp({
      animation: {
        effects: 'rotateY'
      }
    }); 

    // portfolio prettyphoto
    $("a[rel^='prettyPhoto']").prettyPhoto();


    $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
      return false;
    });

    // jquery counter plugin
    $('.single_counter h5').counterUp({
      delay: 10, // the delay time in ms
      time: 2000 // the speed time in ms
    }); 

    // smoothscroll plugin
    var scroll = new SmoothScroll('a[href*="#"]');

  });
})(jQuery);
