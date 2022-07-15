// scroll na header
var sectionHome = document.querySelector(".home");
var headerNav = document.querySelector(".header");

document.addEventListener("scroll", function () {
  var scl = sectionHome.getBoundingClientRect().top;
  var vp = innerWidth;
  if (vp > 760) {
    if (scl < -100) {
      headerNav.classList.add("scroll");
    } else {
      headerNav.classList.remove("scroll");
    }
  }
});

//menu mobile
var btnMobile = document.querySelector(".btn-mobile");
var navBar = document.querySelector(".navbar");

function closeMenu() {
  navBar.classList.toggle("active");
}
btnMobile.addEventListener("click", function () {
  closeMenu();
});
