"use strict";

const faqs = document.querySelectorAll(".faq__accordions");

for (let i = 0; i < faqs.length; i++)
  faqs[i].addEventListener("click", function () {
    let currentOpen = document.querySelectorAll(".open");

    if (currentOpen.length > 0) {
      currentOpen[0].className = currentOpen[0].className.replace(" open", "");
    }
    this.classList.toggle("open");
  });
