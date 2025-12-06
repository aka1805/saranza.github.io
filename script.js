"use strict";

// SIDEBAR TOGGLE
const sidebar = document.querySelector(".sidebar");

// Nav links switching
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");

    // Remove active state from all links
    navLinks.forEach(nav => nav.classList.remove("active"));

    // Add active to clicked one
    this.classList.add("active");

    // Switch pages
    pages.forEach(page => {
      if (page.getAttribute("data-page") === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  });
});

// CONTACT FORM BUTTON ACTIVE EFFECT
const formBtn = document.querySelector(".form-btn");
if (formBtn) {
  formBtn.addEventListener("mousedown", () => formBtn.classList.add("pressed"));
  formBtn.addEventListener("mouseup", () => formBtn.classList.remove("pressed"));
}

// OPTIONAL: Smooth fade-in for pages
pages.forEach(page => {
  page.style.transition = "opacity 0.3s ease";
});