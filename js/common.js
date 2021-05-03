$(function(){

  $(document).ready(function() {
    $('.loading').delay(1500).fadeOut(300);  
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



  





  // 미디어 쿼리  --------------------------------------------
  function matchEvent(e) {
    if (e.matches) {
      setTimeout(skrollr.init,500);
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



  
$.ajax({
  url:'data.json',
  success:function(data){
      data.gallery.forEach(function(value, key){
        let img = new Image();
        let img2 = new Image();
        let img3 = new Image();
        let img4 = new Image();
        let img5 = new Image();          

        img.src = value.hashImg;
        img2.src = value.hashImg2;
        img3.src = value.hashImg3;
        img4.src = value.hashImg4;
        img5.src = value.hashImg5;
      });
  }
});







});



    