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
const decreaseCounter = document.querySelector(".minus");
const increaseCounter = document.querySelector(".add");
const counterValue = document.querySelector(".counter-number");
const itemAlert = document.querySelector(".item");
const checkout = document.querySelector(".item");
const addItem = document.querySelector(".add-cart");
const emptyContent = document.querySelector(".empty-content");
const thumbnails = document.querySelectorAll(".thumb");
const thumbnailCont = document.querySelector(".thumbnail-container");
const sliderCont = document.querySelector(".product-cont");
const cartInfo = document.querySelector(".cart-info");

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
  itemAlert.classList.add(`item-${action}`);

  setTimeout(() => {
    itemAlert.textContent = "";
    itemAlert.classList.add(`item-${action}`);
  }, 1000);
}

// counter functionality
// counter functionality

function counterNumber(cart) {
  let cartCounter = 0;

  increaseCounter.addEventListener("click", function (e) {
    if (e.target) {
      cartCounter++;
      counterValue.textContent = `${cartCounter}`;
    }
  });
  decreaseCounter.addEventListener("click", function (e) {
    if (e.target && cartCounter >= 2) {
      cartCounter--;
      counterValue.textContent = `${cartCounter}`;
    }
  });
  cart = cartCounter;
}

// Add item functionality
function sliderImages() {
  const sliders = ``;
}

function createCart() {}
function createCartContent() {
  const addContent = `
 <div class="notify-big-container">
          <div class="notify-content">
            <div class="notify-div">
              <div class="notify-image">
                <img
                  src="./images/image-product-1-thumbnail.jpg"
                  alt=""
                  class="notify-thumb"
                />
              </div>
              <div class="notify-info">
                <p>Autumn limited edition...</p>
                <p>
                  $125.00 x <span class="cart-number">$</span>
                  <span class="cart-total">$</span>
                </p>
              </div>
            </div>
            <div class="delete-cont">
              <img src="./images/icon-delete.svg" alt="" class="delete" />
            </div>
          </div>
          <button class="checkout">Checkout</button>
        </div>
`;
  emptyContent.classList.add("empty-cart");

  // counterNumber(number);
  notification.insertAdjacentHTML("beforeend", addContent);

  displayAlert("Item has been added to cart", "add");
  const deleteItem = document.querySelector(".delete-cont");
  const notifyCont = document.querySelector(".notify-big-container");
  cartText();
  deleteItem.addEventListener("click", function () {
    deleteCartContent();
  });
}

// deleteItem;

function cartText() {
  cartInfo.style.display = "block";
  cartInfo.textContent = "1";
}
// Event Lsteners
window.addEventListener("DOMContentLoaded", function () {
  counterNumber();
  createCart();
  createCartContent;
  // if (!notification.hasAttribute("div")) {
  //   createCartContent;
  // } else {
  //   deleteCartContent;
  // }

  // Remove item functionality
});

function deleteCartContent() {
  // notification.classList.add("empty-cart");
  emptyContent.classList.remove("empty-cart");
  displayAlert("Item has been removed from cart", "remove");
  const lastChild = notification.lastElementChild;
  lastChild.classList.add("empty-cart");
  console.log(lastChild);
  cartInfo.style.display = "none";
}

addItem.addEventListener("click", createCartContent);

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
