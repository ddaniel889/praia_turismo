import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor() {


   }

  // declare const $: any;

/*export const Plugins = {
  backgroundImage: (): void => {
    const databackground = $('[data-background]');
    databackground.each(function() {
      if ($(this).attr('data-background')) {
        const imagePath = $(this).attr('data-background');
        $(this).css({
          background: 'url(' + imagePath + ')',
        });
      }
    });
  },
  owlCarouselConfig: (): void => {
    const target = $('.owl-slider');
    if (target.length > 0) {
      target.each(function() {
        const el = $(this);
        const dataAuto = el.data('owl-auto');
        const dataLoop = el.data('owl-loop');
        const dataSpeed = el.data('owl-speed');
        const dataGap = el.data('owl-gap');
        const dataNav = el.data('owl-nav');
        const dataDots = el.data('owl-dots');
        const dataAnimateIn = el.data('owl-animate-in')
          ? el.data('owl-animate-in')
          : '';
        const dataAnimateOut = el.data('owl-animate-out')
          ? el.data('owl-animate-out')
          : '';
        const dataDefaultItem = el.data('owl-item');
        const dataItemXS = el.data('owl-item-xs');
        const dataItemSM = el.data('owl-item-sm');
        const dataItemMD = el.data('owl-item-md');
        const dataItemLG = el.data('owl-item-lg');
        const dataItemXL = el.data('owl-item-xl');
        const dataNavLeft = el.data('owl-nav-left')
          ? el.data('owl-nav-left')
          : '<i class="icon-chevron-left"></i>';
        const dataNavRight = el.data('owl-nav-right')
          ? el.data('owl-nav-right')
          : '<i class="icon-chevron-right"></i>';
        const duration = el.data('owl-duration');
        const datamouseDrag = el.data('owl-mousedrag') === 'on' ? true : false;
        if (
          target.children('div, span, a, img, h1, h2, h3, h4, h5, h5')
            .length >= 2
        ) {
          el.addClass('owl-carousel').owlCarousel({
            animateIn: dataAnimateIn,
            animateOut: dataAnimateOut,
            margin: dataGap,
            autoplay: dataAuto,
            autoplayTimeout: dataSpeed,
            autoplayHoverPause: true,
            loop: dataLoop,
            nav: dataNav,
            mouseDrag: datamouseDrag,
            touchDrag: true,
            autoplaySpeed: duration,
            navSpeed: duration,
            dotsSpeed: duration,
            dragEndSpeed: duration,
            navText: [dataNavLeft, dataNavRight],
            dots: dataDots,
            items: dataDefaultItem,
            responsive: {
              0: {
                items: dataItemXS,
              },
              480: {
                items: dataItemSM,
              },
              768: {
                items: dataItemMD,
              },
              992: {
                items: dataItemLG,
              },
              1200: {
                items: dataItemXL,
              },
              1680: {
                items: dataDefaultItem,
              },
            },
          });
        }
      });
    }
  },
  carouselNavigation: (): void => {
    const prevBtn = $('.ps-carousel__prev');
    const nextBtn = $('.ps-carousel__next');
    prevBtn.on('click', function(e: any) {
      e.preventDefault();
      const target = $(this).attr('href');
      $(target).trigger('prev.owl.carousel', [1000]);
    });
    nextBtn.on('click', function(e: any) {
      e.preventDefault();
      const target = $(this).attr('href');
      $(target).trigger('next.owl.carousel', [1000]);
    });
  },
  slickConfig: (): void => {
    const product = $('.ps-product--detail');
    if (product.length > 0) {
      const primary = product.find('.ps-product__gallery');
      const second = product.find('.ps-product__variants');
      const vertical = product
          .find('.ps-product__thumbnail')
          .data('vertical');
      primary.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.ps-product__variants',
        fade: true,
        dots: false,
        infinite: false,
        arrows: primary.data('arrow'),
        prevArrow: '<a href="#"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a href="#"><i class="fa fa-angle-right"></i></a>',
      });
      second.slick({
        slidesToShow: second.data('item'),
        slidesToScroll: 1,
        infinite: false,
        arrows: second.data('arrow'),
        focusOnSelect: true,
        prevArrow: '<a href="#"><i class="fa fa-angle-up"></i></a>',
        nextArrow: '<a href="#"><i class="fa fa-angle-down"></i></a>',
        asNavFor: '.ps-product__gallery',
        vertical,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: second.data('arrow'),
              slidesToShow: 4,
              vertical: false,
              prevArrow:
                '<a href="#"><i class="fa fa-angle-left"></i></a>',
              nextArrow:
                '<a href="#"><i class="fa fa-angle-right"></i></a>',
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: second.data('arrow'),
              slidesToShow: 4,
              vertical: false,
              prevArrow:
                '<a href="#"><i class="fa fa-angle-left"></i></a>',
              nextArrow:
                '<a href="#"><i class="fa fa-angle-right"></i></a>',
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              vertical: false,
              prevArrow:
                '<a href="#"><i class="fa fa-angle-left"></i></a>',
              nextArrow:
                '<a href="#"><i class="fa fa-angle-right"></i></a>',
            },
          },
        ],
      });
    }
  },
  productLightbox: (): void => {
    const product = $('.ps-product--detail');
    if (product.length > 0) {
      $('.ps-product__gallery').lightGallery({
        selector: '.item a',
        thumbnail: true,
        share: false,
        fullScreen: false,
        autoplay: false,
        autoplayControls: false,
        actualSize: false,
      });
      if (product.hasClass('ps-product--sticky')) {
        $('.ps-product__thumbnail').lightGallery({
          selector: '.item a',
          thumbnail: true,
          share: false,
          fullScreen: false,
          autoplay: false,
          autoplayControls: false,
          actualSize: false,
        });
      }
    }
    $('.ps-gallery--image').lightGallery({
      selector: '.ps-gallery__item',
      thumbnail: true,
      share: false,
      fullScreen: false,
      autoplay: false,
      autoplayControls: false,
      actualSize: false,
    });
    $('.ps-video').lightGallery({
      thumbnail: false,
      share: false,
      fullScreen: false,
      autoplay: false,
      autoplayControls: false,
      actualSize: false,
    });
  },
  countDown: (): void => {
    const time = $('.ps-countdown');
    time.each(function() {
      const el = $(this);
      const value = $(this).data('time');
      const countDownDate = new Date(value).getTime();
      const timeout = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        el.find('.days').html(days);
        el.find('.hours').html(hours);
        el.find('.minutes').html(minutes);
        el.find('.seconds').html(seconds);
        if (distance < 0) {
          clearInterval(timeout);
          el.closest('.ps-section').hide();
        }
      }, 1000);
    });
  },
  rating: (): void => {
    $('select.ps-rating').each(function() {
      let readOnly: boolean;
      if ($(this).attr('data-read-only') === 'true') {
        readOnly = true;
      } else {
        readOnly = false;
      }
      $(this).barrating({
        theme: 'fontawesome-stars',
        readonly: readOnly,
        emptyValue: '0',
      });
    });
  },
  progressBar: (): void => {
    const progress = $('.ps-progress');
    progress.each(function() {
      const value = $(this).data('value');
      $(this)
        .find('span')
        .css({
          width: value + '%',
        });
    });
  },
  subMenuToggle: (): void => {
    $('.menu--mobile .menu-item-has-children > .sub-toggle').on(
      'click',
      function(e: any) {
        e.preventDefault();
        const current = $(this).parent('.menu-item-has-children');
        $(this).toggleClass('active');
        current
          .siblings()
          .find('.sub-toggle')
          .removeClass('active');
        current.children('.sub-menu').slideToggle(350);
        current
          .siblings()
          .find('.sub-menu')
          .slideUp(350);
        if (current.hasClass('has-mega-menu')) {
          current.children('.mega-menu').slideToggle(350);
          current
            .siblings('.has-mega-menu')
            .find('.mega-menu')
            .slideUp(350);
        }
      }
    );
    $('.menu--mobile .has-mega-menu .mega-menu__column .sub-toggle').on(
      'click',
      function(e: any) {
        e.preventDefault();
        const current = $(this).closest('.mega-menu__column');
        $(this).toggleClass('active');
        current
          .siblings()
          .find('.sub-toggle')
          .removeClass('active');
        current.children('.mega-menu__list').slideToggle(350);
        current
          .siblings()
          .find('.mega-menu__list')
          .slideUp(350);
      }
    );
    const listCategories = $('.ps-list--categories');
    if (listCategories.length > 0) {
      $('.ps-list--categories .menu-item-has-children > .sub-toggle').on(
        'click',
        function(e: any) {
          e.preventDefault();
          const current = $(this).parent('.menu-item-has-children');
          $(this).toggleClass('active');
          current
            .siblings()
            .find('.sub-toggle')
            .removeClass('active');
          current.children('.sub-menu').slideToggle(350);
          current
            .siblings()
            .find('.sub-menu')
            .slideUp(350);
          if (current.hasClass('has-mega-menu')) {
            current.children('.mega-menu').slideToggle(350);
            current
              .siblings('.has-mega-menu')
              .find('.mega-menu')
              .slideUp(350);
          }
        }
      );
    }
  },
  siteToggleAction: (): void => {
    const navSidebar = $('.navigation--sidebar');
    const filterSidebar = $('.ps-filter--sidebar');
    $('.menu-toggle-open').on('click', function(e: any) {
      e.preventDefault();
      $(this).toggleClass('active');
      navSidebar.toggleClass('active');
      $('.ps-site-overlay').toggleClass('active');
    });

    $('.ps-toggle--sidebar').on('click', function(e: any) {
      e.preventDefault();
      const url = $(this).attr('href');
      $(this).toggleClass('active');
      $(this)
        .siblings('a')
        .removeClass('active');
      $(url).toggleClass('active');
      $(url)
        .siblings('.ps-panel--sidebar')
        .removeClass('active');
      $('.ps-site-overlay').toggleClass('active');
    });

    $('#filter-sidebar').on('click', (e: any) => {
      e.preventDefault();
      filterSidebar.addClass('active');
      $('.ps-site-overlay').addClass('active');
    });

    $('.ps-filter--sidebar .ps-filter__header .ps-btn--close').on(
      'click',
      (e: any) => {
        e.preventDefault();
        filterSidebar.removeClass('active');
        $('.ps-site-overlay').removeClass('active');
      }
    );

    $('body').on('click', (e: any) => {
      if (
        $(e.target)
          .siblings('.ps-panel--sidebar')
          .hasClass('active')
      ) {
        $('.ps-panel--sidebar').removeClass('active');
        $('.ps-site-overlay').removeClass('active');
      }
    });
  },
  tooltip: (): void => {
    $('[data-toggle="tooltip"]').tooltip();
  },
  tabs: (): void => {
    $('.ps-tab-list  li > a ').on('click', function(e: any) {
      e.preventDefault();
      const target = $(this).attr('href');
      $(this)
        .closest('.owl-item')
        .siblings('.owl-item')
        .removeClass('active');
      $(this)
        .closest('.owl-item')
        .addClass('active');
      $(target).addClass('active');
      $(target)
        .siblings('.ps-tab')
        .removeClass('active');
    });
  },
  tamano: (): void => {
    $('.owl-item').css({ height: '290px' });
  },
  paginacion: (): void => {
    const target = $('.pagination');

    if (target.length > 0) {

      target.each(function() {

        const tg = $(this);
        const totalPages = tg.data('total-pages');
        const actualPage = tg.data('actual-page');
        const currentRoute = tg.data('current-route');

        tg.twbsPagination({
          totalPages,
          startPage: actualPage,
          visiblePages: 4,
          first: 'First',
          last: 'Last',
          prev: '<i class="fas fa-angle-left"></i>',
          next: '<i class="fas fa-angle-right"></i>'
        // tslint:disable-next-line: variable-name
        }).on('page', (_evt: any, page: string): void => {
          window.location.href = currentRoute + '&' + page;
        });

      });
    }
  },
  select2Cofig: (): void => {
    $('select.ps-select').select2({
      placeholder: $(this).data('placeholder'),
      minimumResultsForSearch: -1,
    });
  },
  getOffset: (clase: string) => {
    const { left, top } = document.getElementsByClassName(clase)[0].getBoundingClientRect();
    return {
      left: left + window.scrollX,
      top: top + window.scrollY
    };
  },
  stickyHeader: (): void => {
    const header = $('.header');
    const checkpoint = 50;
    header.each(function() {
      if ($(this).data('sticky') === true) {
        const el = $(this);
        $(window).scroll(function() {
          const currentPosition = $(this).scrollTop();
          if (currentPosition > checkpoint) {
            el.addClass('header--sticky');
          } else {
            el.removeClass('header--sticky');
          }
        });
      }
    });

    const stickyCart = $('#cart-sticky');
    if (stickyCart.length > 0) {
      $(window).scroll(function() {
        const currentPosition = $(this).scrollTop();
        if (currentPosition > checkpoint) {
          stickyCart.addClass('active');
        } else {
          stickyCart.removeClass('active');
        }
      });
    }
  },
  dataPicker: (): void => {
    // ? INITIALIZE DATEPICKER PLUGIN
    $('.datepicker').datepicker({
      clearBtn: true,
      format: 'dd/mm/yyyy',
      language: 'pt-BR'
    });
  },
  modalSimple: (id: string): Promise<boolean> => {
    $(`#${id}`).on('shown.bs.modal');
    return new Promise<boolean>(resolve => {
      $(document).ready(() => {
        $(`#${id}`).on('hidden.bs.modal', () => {
          resolve(false);
        });
      });
    });
  }*/

};

