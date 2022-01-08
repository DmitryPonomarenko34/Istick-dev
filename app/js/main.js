$(function () {
  let menuNavbar = $('.menu');
  let burgerBtn = $('.burger');
  let navbarSubmenu = $('.submenu');
  let header = $('.header');
  let mobileMenu = $('.mobile-menu');
  let headerFixedBlock = $('.header__action');
  let userLink = $('.header__info-personal');
  let headerScrollTop = header.outerHeight();
  let headerContainer = $('.header__container');
  let firstBlockPadding = $('main section:first').css('padding-top');
  let paddingTop = headerScrollTop + parseInt(firstBlockPadding.match(/\d+/));

  if ($(window).width() <= 1200) {
    $('.header__info-link--marker').removeClass('header__info-link').prependTo('.header__action-items');
  }

  if ($(window).width() > 992) {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > headerScrollTop) {
        menuNavbar.prependTo(headerFixedBlock);
        userLink.appendTo(headerFixedBlock);
        navbarSubmenu.appendTo(mobileMenu);
        header.addClass('header--fixed');
        $('main section:first').css('padding-top', paddingTop);
      } else {
        header.removeClass('header--fixed');
        navbarSubmenu.appendTo('.dropdown-item');
        menuNavbar.appendTo(headerContainer);
        userLink.appendTo('.header__info-user');
        $('main section:first').css('padding-top', '');
      }
    });
  }


  if ($(window).width() <= 992) {
    header.addClass('header--fixed');
    menuNavbar.prependTo(headerFixedBlock);
    navbarSubmenu.appendTo(mobileMenu);

    headerScrollTop = header.innerHeight();
    paddingTop = headerScrollTop + parseInt(firstBlockPadding.match(/\d+/));
    $('main section:first').css('padding-top', paddingTop);

    console.log(headerScrollTop);

    $('.submenu__item-text').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('submenu__item-text--active');
    });
  }

  if ($(window).width() <= 530) {
    $('.footer__title').on('click', function () {
      $(this).toggleClass('footer__title--active');
      $(this).next().slideToggle();
    });
  }

  if (burgerBtn) {
    $(burgerBtn).on('click', function () {
      $(this).toggleClass('burger--active');
      mobileMenu.toggleClass('mobile-menu--active');
    })
  }
});