"use strict";
// query selectors
const closeButton = document.querySelector(".close-button");
const sideLinks = document.querySelector(".side-links");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const product = document.querySelectorAll(".product-container");
const leftButton = document.querySelector(".slide-button-one");
const rightButton = document.querySelector(".slide-button-two");
const cartImage = document.querySelector(".cart-container");
const notification = document.querySelector(".notification-cont");
const notify = document.querySelector(".notify-big-container");
const decreaseCounter = document.querySelector(".minus");
const increaseCounter = document.querySelector(".add");
const counterValue = document.querySelector(".counter-number");
const itemAlert = document.querySelector(".item");
const checkout = document.querySelector(".checkout");
const addItem = document.querySelector(".add-cart");
const emptyContent = document.querySelector(".empty-content");
const thumbnails = document.querySelectorAll(".thumb");
const thumbnailCont = document.querySelector(".thumbnail-container");
const sliderCont = document.querySelector(".product-cont");
const cartInfo = document.querySelector(".cart-info");
const total = document.querySelector(".cart-total");
const number = document.querySelector(".cart-number");
const deleteItem = document.querySelector(".delete-cont");

// close-button function
const closeMenu = function () {
  overlay.classList.add("remove-overlay");
  sideLinks.classList.add("sidebar-close");
};
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// open menu
hamburger.addEventListener("click", function () {
  overlay.classList.remove("remove-overlay");
  sideLinks.classList.remove("sidebar-close");
});

// escape button function
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !sideLinks.classList.contains("sidebar-close")) {
    closeMenu();
  }
});

// slider functionality
product.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

const slideButton = function () {
  if (counter === product.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = product.length - 1;
  }
  product.forEach(
    (slide) => (slide.style.transform = `translate(-${counter * 100}%)`)
  );
};
rightButton.addEventListener("click", function () {
  counter++;
  slideButton();
});
leftButton.addEventListener("click", function () {
  counter--;
  slideButton();
});

// slider functionality (desktop)

// cart functionality
// open cart
cartImage.addEventListener("click", function () {
  notification.classList.toggle("empty-cart");
  // displayAlert("Item added to cart", "add");
});

// alert functionality
function displayAlert(content, action) {
  itemAlert.textContent = content;
  itemAlert.style.display = "block";
  itemAlert.classList.add(`item-${action}`);

  setTimeout(() => {
    itemAlert.style.display = "none";
    itemAlert.classList.remove(`item-${action}`);
  }, 1000);
}

// counter functionality
// counter functionality

let cartCounter = 0;
// reset counter
function counters(cart) {
  cartCounter = cart;
}
function counterNumber() {
  increaseCounter.addEventListener("click", function (e) {
    if (e.target) {
      cartCounter++;
      cartNumber(cartCounter);
      counterValue.textContent = `${cartCounter}`;
    }
  });
  decreaseCounter.addEventListener("click", function (e) {
    if (e.target && cartCounter >= 1) {
      cartCounter--;
      cartNumber(cartCounter);

      counterValue.textContent = `${cartCounter}`;
    }
  });
}

counterNumber();
function cartNumber(value = 0) {
  number.textContent = value;
  total.textContent = `$${value * 125}`;
}
cartNumber();
// Notification number
function cartText() {
  cartInfo.style.display = "block";
  cartInfo.textContent = "1";
}

// refractor
function cartCounterAndNumber(numbers) {
  function cartNumber(numbs = 0) {
    number.textContent = numbs;
    total.textContent = `$${numbs * 125}`;
  }
  function counters(cart) {
    cartCounter = cart;
  }

  counterValue.textContent = numbers;
  counters(numbers);
  cartNumber(numbers);
}
// create cart content
function createCartContent() {
  if (counterValue.textContent <= 0) {
    displayAlert("Select the number of item you want", "remove");
  } else {
    emptyContent.classList.add("empty-cart");
    notify.classList.remove("empty-cart");
    displayAlert("Item has been added to cart", "add");
    cartText();
  }
}
addItem.addEventListener("click", createCartContent);

function deleteCartContent() {
  // notification.classList.add("empty-cart");
  emptyContent.classList.remove("empty-cart");
  displayAlert("Item has been removed from cart", "remove");
  notify.classList.add("empty-cart");
  cartInfo.style.display = "none";
  cartCounterAndNumber(0);
}
// deleteItem;
deleteItem.addEventListener("click", deleteCartContent);

// checkout functionality
function checkoutOrder() {
  notify.classList.add("empty-cart");
  notification.classList.toggle("empty-cart");
  cartInfo.style.display = "none";
  displayAlert("Success! Your order has been recieved", "add");
  emptyContent.classList.remove("empty-cart");
  cartCounterAndNumber(0);
}
checkout.addEventListener("click", checkoutOrder);

// desktop container functionaliity
let clickNum = 0;

function overlayFunction() {
  overlay.classList.remove("remove-overlay");
  thumbnailCont.style.zIndex = "500";
  sliderCont.style.display = "none";
}

thumbnails.forEach((items, index) => {
  items.addEventListener("click", function () {
    thumbnails[clickNum].classList.remove("thumbBorder");

    items.classList.add("thumbBorder");
    clickNum = index;
    overlayFunction();
  });
});
