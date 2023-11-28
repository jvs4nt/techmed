function toggleNavbar() {
    var navbarMobile = document.getElementById("navbarMobile");
    navbarMobile.style.display = (navbarMobile.style.display === "block") ? "none" : "block";
}

window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
