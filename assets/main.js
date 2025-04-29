// javascript

// dropdown menu -----------------
const dropdownBtn = document.querySelector(".header__nav-link--active");
const dropdownContent = document.querySelector(".header__dropdown-content");
const arrowImg = document.querySelector(".header__nav-link--arrow-down");

dropdownBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dropdownContent.classList.toggle("show");

  if (dropdownContent.classList.contains("show")) {
    arrowImg.src = "./assets/images/header/arrow-up.svg";
    dropdownBtn.style.color = "#ff3b30";
  } else {
    arrowImg.src = "./assets/images/header/arrow-down.svg";
    dropdownBtn.style.color = "";
  }
});

// Close the dropdown if user clicks outside
window.addEventListener("click", (event) => {
  if (
    !dropdownBtn.contains(event.target) &&
    !dropdownContent.contains(event.target)
  ) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
      arrowImg.src = "./assets/images/header/arrow-down.svg";
      dropdownBtn.style.color = "";
    }
  }
});

// burger menu ------------------------
const burger = document.getElementById("burger");
const burgerMenu = document.querySelector(".header__bottom");
burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
});
