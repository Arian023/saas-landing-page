// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector("#hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
      document.querySelector("#navbar-background").style.display = "block";
    } else {
      document.querySelector("#navbar-background").style.display = "none";
    }
  });

  // Close menu when tapping outside
  document.addEventListener("click", (e) => {
    if (
      e.target !== hamburgerButton &&
      e.target !== mobileMenu &&
      mobileMenu.classList.contains("active")
    ) {
      mobileMenu.classList.toggle("active");
      document.querySelector("#navbar-background").style.display = "none";
    }
  });
});

// FAQ category
document.addEventListener("DOMContentLoaded", function () {
  const faqMenu = document.querySelector(".faq-menu");
  const faqOptions = document.querySelectorAll(".faq-menu li");

  faqMenu.addEventListener("click", (e) => {
    // Toggle active class
    faqOptions.forEach((option) => {
      option.classList.remove("active");
    });
    // Add active class
    e.target.classList.add("active");
  });
});

// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Toggle icon
    icon.classList.toggle("fa-chevron-up");
    icon.classList.toggle("fa-chevron-down");

    // Toggle visibility of body
    groupBody.classList.toggle("open");
  });
});
