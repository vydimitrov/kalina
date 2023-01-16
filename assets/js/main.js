(function () {
  // Header Sticky
  window.addEventListener("scroll", function (event) {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (document.documentElement.scrollTop > 120 && vw >= 991) {
      document.querySelector(".navbar-area").classList.add("is-sticky");
    } else {
      document.querySelector(".navbar-area").classList.remove("is-sticky");
    }
  });

  // toggle mobile menu
  document
    .querySelector(".nav-close-button")
    .addEventListener("click", function () {
      document
        .querySelector(".navbar-wrapper")
        .classList.remove("show-nav-bar");
    });

  document
    .querySelector(".mobile-menu-trigger")
    .addEventListener("click", function () {
      document.querySelector(".navbar-wrapper").classList.add("show-nav-bar");
    });

  // Highlight the active menu item
  const page = location.pathname.split("/").pop();
  const link = document
    .querySelector(".main-navbar")
    .querySelector(`[href="/${page}"]`);

  if (!!link) {
    link.classList.add("active");
    const dropdown = link.closest(".dropdown-menu");
    !!dropdown && dropdown.previousElementSibling.classList.add("active");
  }
})();
