$(function(){

  $(document).ready(function() {
    $('.loading').delay(600).fadeOut(300);
  });

  $('header').load('inc.html header',init); 

  function init(){
  // burger menu-----------------------------
  var Menu = (function() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  var menuList = document.querySelector('.menu__list');
  var brand = document.querySelector('.menu__brand');
  var menuItems = document.querySelectorAll('.menu__item');

  var active = false;

  var toggleMenu = function() {
    if (!active) {
      menu.classList.add('menu--active');
      menuList.classList.add('menu__list--active');
      brand.classList.add('menu__brand--active');
      burger.classList.add('burger--close');
      for (var i = 0, ii = menuItems.length; i < ii; i++) {
        menuItems[i].classList.add('menu__item--active');
      }
      active = true;
    } else {
      menu.classList.remove('menu--active');
      menuList.classList.remove('menu__list--active');
      brand.classList.remove('menu__brand--active');
      burger.classList.remove('burger--close');
      for (var i = 0, ii = menuItems.length; i < ii; i++) {
        menuItems[i].classList.remove('menu__item--active');
      }
      active = false;
    }
  };

    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };

    var init = function() { bindActions(); };

    return { init: init };
    }());

    Menu.init();
    // burger menu-----------------------------


    // 스크롤 이벤트---------------------------------
    function niceScroll(){
      $('body').niceScroll({
        scrollspeed: 100,
        smoothscroll: true
      }); 
    }
    // 스크롤 이벤트---------------------------------


    // 미디어 쿼리  --------------------------------------------
    function matchEvent(e) {
      if (e.matches) {
        niceScroll();
        skrollr.init();
      } else {
      }
    }

    function clickList() {
      var mq = window.matchMedia('screen and (min-width:1025px)');
      matchEvent(mq);
      mq.addListener(matchEvent);
    }
    clickList();
    // 미디어 쿼리  --------------------------------------------
    
    }


  

});



    