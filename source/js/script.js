
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var addToCart = document.querySelectorAll(".button--add-to-cart");
var popup = document.querySelector(".modal");

if (addToCart) {
  for (var i = 0; var < addToCart.length; i++) {
    addToCart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    });
  };
};
