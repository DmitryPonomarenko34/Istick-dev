$(function () {
  let menuNavbar = $('.menu');
  let burgerBtn = $('.burger');
  let navbarSubmenu = $('.submenu');
  let header = $('.header');
  let mobileMenu = $('.mobile-menu');
  let headerFixedBlock = $('.header__action');
  let userLink = $('.header__info-personal');
  let headerContainer = $('.header__container');
  let headerScrollTop = header.outerHeight();
  let firstBlockPadding = $('main section:first').css('padding-top');
  let paddingTop = headerScrollTop + parseInt(firstBlockPadding.match(/\d+/));

  console.log(firstBlockPadding);
  console.log(headerScrollTop);

  if ($(window).width() <= 1200) {
    $('.header__info-link--marker').removeClass('header__info-link').prependTo('.header__action-items');
    headerScrollTop = header.outerHeight();
    paddingTop = headerScrollTop + parseInt(firstBlockPadding.match(/\d+/));
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

    headerScrollTop = header.outerHeight();
    paddingTop = headerScrollTop + parseInt(firstBlockPadding.match(/\d+/));
    $('main section:first').css('padding-top', paddingTop);

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

  $('.stars').rateYo({
    maxValue: 5,
    spacing: '5px',
    starWidth: "15px",
    normalFill: 'transparent',
    readOnly: true,
    ratedFill: '#6667AB',
    "starSvg": '<svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11.4549L2.86515 14.0011L3.90016 8.88814L0 5.3488L5.27491 4.73484L7.5 0.00109863L9.72509 4.73484L15 5.3488L11.0998 8.88814L12.1348 14.0011L7.5 11.4549Z"/></svg>'
  });

  $(".jq-ry-group svg").attr("stroke-width", "1").attr("stroke", "#6667AB").attr("stroke-linecap", "round");

  $('.portfolio__slider').slick({
    dots: true,
    arrows: false,
    slidesPerRow: 4,
    rows: 2,
    adaptiveHeight: true,

    responsive: [{
        breakpoint: 769,
        settings: {
          slidesPerRow: 3,
          rows: 2,
        }
      },
      {
        breakpoint: 531,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesPerRow: 1,
          rows: 1,
        }
      },
    ]
  });

  $('.popular__control-tab').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('data-tabs'),
      content = $('.popular__content-item[data-tabs="' + id + '"]');

    $('.popular__control-tab').removeClass('popular__control-tab--active');
    $(this).addClass('popular__control-tab--active');

    $('.popular__content-item').removeClass('popular__content-item--active');
    content.addClass('popular__content-item--active');
  });

  $('.popular__control-tab:first').click();

  $('.header__action-form').validate();
  $('.quick-form').validate();
  $('.contacts__form').validate();
  $('.footer__form').validate();
  $('.contacts__form-input--phone').inputmask({
    "mask": "+9 (999) 999 9999"
  });

  $('.slider-syncing__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: '<button type="button" class="slick-next"><svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z"/></svg></button>',
    asNavFor: '.slider-syncing__nav',
    infinite: false,
  });
  $('.slider-syncing__nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-syncing__for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
        }
      },
    ]
  });

  $(".card--mugs__items a").each(function () {

    $(this).on("mouseenter", function (e) {
      e.preventDefault();

      let dataTitle = $(this).attr('data-title');
      let dataSrc = $(this).attr('data-src');
      let dataSource = $(this).attr('data-source');
      let dataHref = $(this).attr('href');
      let linkParrent = $(this).parents('.card--mugs');

      if (dataTitle) {
        linkParrent.find('.card__title').text(dataTitle);
      }
      if (dataSrc) {
        linkParrent.find('picture img').attr('src', dataSrc);
      }
      if (dataSource) {
        linkParrent.find('picture source').attr('srcset', dataSource);
      }
      if (dataHref) {
        linkParrent.find('.card--mugs__link').attr('href', dataHref);
      }
    });
  });

});