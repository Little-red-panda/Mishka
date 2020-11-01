let navButton = document.querySelector(".main-nav__toggle");
let nav = document.querySelector(".main-nav__wrapper");

navButton.classList.remove("main-nav__toggle--nojs");

navButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    nav.classList.toggle("main-nav--closed");
});

navButton.addEventListener("click", function() {
    if (navButton.classList.contains("main-nav__toggle--closed")) {
        navButton.classList.remove("main-nav__toggle--closed");
        navButton.classList.add("main-nav__toggle--opened");
    } else {
        navButton.classList.remove("main-nav__toggle--opened");
        navButton.classList.add("main-nav__toggle--closed");
    }
});

let popup = document.querySelector(".modal-cart");
let modalButton = document.querySelectorAll(".modal__btn");
let overlay = document.querySelector(".modal-overlay");
let addButton = document.querySelector(".modal-cart__button");

for (let i = 0; i < modalButton.length; i++) {
    modalButton[i].addEventListener("click", function() {
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
});
};

addButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function() {
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});