let button = document.querySelector(".main-nav__toggle");
let nav = document.querySelector(".main-nav__wrapper");

console.log(button);

button.classList.remove("main-nav__toggle--nojs");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    nav.classList.toggle("main-nav--closed");
});

button.addEventListener("click", function() {
    if (button.classList.contains("main-nav__toggle--closed")) {
        button.classList.remove("main-nav__toggle--closed");
        button.classList.add("main-nav__toggle--opened");
    } else {
        button.classList.remove("main-nav__toggle--opened");
        button.classList.add("main-nav__toggle--closed");
    }
});

let popup = document.querySelector(".modal-cart");
let order = document.querySelector(".top-item__order");
let carts = document.querySelectorAll(".product-item__cart");
let overlay = document.querySelector(".modal-overlay");
let addButton = document.querySelector(".modal-cart__button");

order.addEventListener("click", function() {
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
});

console.log(carts);

for (let i = 0; i < carts.length; i++) {
carts[i].addEventListener("click", function() {
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