$(document).ready(function() {
  const overlay = $('.overlay');

  const overlayUnbind = () => {
    if (!overlay.hasClass('overlay--showed')) {
      overlay.unbind();
    }
  }

  const overlayAddEvent = () => {
    overlay.click(function (e) {
      e.preventDefault();
      $('.catalog').removeClass('catalog--showed-up');
      $(this).removeClass('overlay--showed');
      $('.menu-button').removeClass('menu-button--opened');
      $('.logo__text').removeClass('logo__text--opened');
      $('.main-nav').removeClass('main-nav--opened');
      $(this).removeClass('overlay--menu-showed');
      overlayUnbind();
    });
  }


  $('.menu-button').click((e) => {
    e.preventDefault();
    $('.menu-button').toggleClass('menu-button--opened');
    $('.logo__text').toggleClass('logo__text--opened');
    $('.main-nav').toggleClass('main-nav--opened');
    overlay.toggleClass('overlay--showed overlay--menu-showed');
    overlayAddEvent();
    overlayUnbind();
  });

  $(".catalog__button").click(function (e) {
    e.preventDefault();
    overlay.toggleClass('overlay--showed');
    $('.catalog__button').parent().toggleClass('catalog--showed-up');
    overlayAddEvent();
    overlayUnbind();
  });


  $('.catalog__category-title').click(function (e) {
    e.preventDefault();
    if (!$(this).hasClass('catalog__category-title--opened')) {
      $('.catalog__category-title').removeClass('catalog__category-title--opened');
    }
    $(this).toggleClass('catalog__category-title--opened');
  });

  var slider = tns({
    container: '.slider__container',
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: '.slider__button-wrapper',
    nav: false
  });

  $('select').niceSelect();
});


