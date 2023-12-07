jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });

  jQuery("#Why_smartcity").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 1000,
    smartSpeed: 800,
    nav: false,
    dots : false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
  });
  jQuery("#animetion").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 1000,
    smartSpeed: 800,
    nav: true,
    dots : true,
    responsive: {
      0: {
        items: 2
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 5
      }
    }
  });


  var counted = 0;
  $(window).scroll(function() {
  
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.counting').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 4000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
  
          });
      });
      counted = 1;
    }
  
  });

  AOS.init();

  