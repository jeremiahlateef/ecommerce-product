"use strict";
// query selectors
const closeButton = document.querySelector(".close-button");
const sideLinks = document.querySelector(".side-links");
const overlay = document.querySelector(".overlay");

// close-button function
closeButton.addEventListener("click", function () {
  overlay.classList.add("remove-overlay");
  sideLinks.classList.add("sidebar-close");
});
