$(function(){


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

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

  }());

  Menu.init();
// burger menu-----------------------------




// cursor-------------------------------------------
const handleMousePos = (e) => {
  const CURSOR = document.querySelector('.mouse-cursor');
  const HOVER = document.querySelectorAll('.cursor-hover');
  const { pageX: posX, pageY: posY } = e;
    const runMouseOver = () => {
      CURSOR.style.transform = 'scale(2)';
      CURSOR.style.transition = '0.1s';
      CURSOR.style.background = '#ff7300';
    };
    HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

    const runMouseLeave = () => {
      CURSOR.style.transform = '';
      CURSOR.style.background = '';
    };
    HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
    
    return (
      CURSOR.style.left = `${posX - 50}px`,
      CURSOR.style.top = `${posY - 50}px`  
    );
};
// cursor-------------------------------------------

// 스크롤 이벤트---------------------------------
function niceScroll(){
  $('body').niceScroll({
    scrollspeed: 150,
    smoothscroll: true
  }); 
}


// 스크롤 이벤트---------------------------------


// 미디어 쿼리  --------------------------------------------
function matchEvent(e) {
  if (e.matches) {
    document.addEventListener('mousemove', handleMousePos);
    niceScroll();
    
  } else {
    document.removeEventListener('mousemove', handleMousePos); 
  }
}
  
function clickList() {
  var mq = window.matchMedia('screen and (min-width:1025px)');
  matchEvent(mq);
  mq.addListener(matchEvent);
}
clickList();
// 미디어 쿼리  --------------------------------------------










});



    