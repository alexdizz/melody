"use strict";

//const isMobile = {
//      Android: function () {
//            return navigator.userAgent.match(/Android/i);
//      },
//      BlackBerry: function () {
//            return navigator.userAgent.match(/BlackBerry/i);
//      },
//      iOS: function () {
//            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//      },
//      Opera: function () {
//            return navigator.userAgent.match(/Opera Mini/i);
//      },
//      Windows: function () {
//            return navigator.userAgent.match(/IEMobile/i);
//      },
//      any: function () {
//            return (
//                  isMobile.Android() ||
//                  isMobile.BlackBerry() ||
//                  isMobile.iOS() ||
//                  isMobile.Opera() ||
//                  isMobile.Windows());
//      }
//};

//if (isMobile.any()) {
//      document.body.classList.add('_touch');

//      let menuArrows = document.querySelectorAll('.menu__arrow');
//      if (menuArrows.length > 0) {
//            for (let index = 0; index < menuArrows.length; index++) {
//                  const menuArrow = menuArrows[index];
//                  menuArrow.addEventListener("click", function (e) {
//                        menuArrow.parentElement.classList.toggle('_active');
//                  });
//            }
//      }
//} else {
//      document.body.classList.add('_pc');
//}


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener("click", () => {
   if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
   }
});;

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
   
testWebP(function (support) {  
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});
