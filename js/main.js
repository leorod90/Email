$(document).ready(function () {
  location.hash = ""


  //scrollbar menu
  $(window).scroll(function () {
    // $('.mobile-menu').removeClass('mobile-active');
    if ($(document).scrollTop() > 50) {
      $('.nav').addClass('nav-move');
      $('.nav-top-section').removeClass('top-active');

    } else {
      $('.nav').removeClass('nav-move');
      $('.nav-top-section').addClass('top-active');
    };
  });

  //buttons
  $('.btn').click(function () {
    event.preventDefault();
    const divID = this.hash;
    let num = this.hash === '#contact' ? 30 : 0
    $('html, body').animate({
      scrollTop: $(divID).offset().top + num
    }, 1000);
  });

  //mobile button
  $('.mobile-btn').click(function () {
    $('.mobile-menu').toggleClass('mobile-active');
  })

  //add active to current section
  function addActive(nav) {
    const navName = $(`.nav-${nav}`);
    const hieghtThreshold = $(`#${nav}`).offset().top - 70;
    const hieghtThreshold_end = $(`#${nav}`).offset().top + $(`#${nav}`).height();
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();

      if (scroll >= hieghtThreshold && scroll <= hieghtThreshold_end) {
        navName.addClass('nav-active');
      } else {
        navName.removeClass('nav-active');
      }
    });
  };

  addActive('top-section');
  addActive('services');
  addActive('pricing');
  addActive('results');


  //fancybox
  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    toolbar: false,
    protect: true,
    backFocus: false,
  });

  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }, navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //scroll to div
  $('.header-menu a').click(function () {
    event.preventDefault();
    const divID = this.hash;
    let num = this.hash === '#contact' ? 30 : 0

    $('html, body').animate({
      scrollTop: $(divID).offset().top + num
    }, 1000);
  });

});