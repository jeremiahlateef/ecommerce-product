"use strict";
// query selectors
const closeButton = document.querySelector(".close-button");
const sideLinks = document.querySelector(".side-links");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const product = document.querySelectorAll(".product-container");
const leftButton = document.querySelector(".slide-button-one");
const rightButton = document.querySelector(".slide-button-two");

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
