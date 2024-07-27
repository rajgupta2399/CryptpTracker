/**
 * add event on element
 */

const addEventOnElem = (elem, type, callback) => {
  // If elem is a list of elements, add the event listener to each
  if (elem.length > 1) {
    elem.forEach((element) => element.addEventListener(type, callback));
  } else {
    // If elem is a single element, directly add the event listener
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};
navToggler.addEventListener("click", toggleNavbar);

