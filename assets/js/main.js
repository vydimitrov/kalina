jQuery(
  (function ($) {
    "use strict";

    // Header Sticky
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 120) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });

    // Mean Menu
    jQuery(".mean-menu").meanmenu({
      meanScreenWidth: "1199",
    });

    // Others Option For Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function () {
      $(".others-option-for-responsive .container .container").toggleClass(
        "active"
      );
    });

    // Popup Image
    $('a[data-imagelightbox="popup-btn"]').imageLightbox({
      activity: true,
      overlay: true,
      button: true,
      arrows: true,
    });

    // Subscribe form
    $(".newsletter-form")
      .validator()
      .on("submit", function (event) {
        if (event.isDefaultPrevented()) {
          // handle the invalid form...
          formErrorSub();
          submitMSGSub(false, "Please enter your email correctly.");
        } else {
          // everything looks good!
          event.preventDefault();
        }
      });
    function callbackFunction(resp) {
      if (resp.result === "success") {
        formSuccessSub();
      } else {
        formErrorSub();
      }
    }
    function formSuccessSub() {
      $(".newsletter-form")[0].reset();
      submitMSGSub(true, "Thank you for subscribing!");
      setTimeout(function () {
        $("#validator-newsletter").addClass("hide");
      }, 4000);
    }
    function formErrorSub() {
      $(".newsletter-form").addClass("animated shake");
      setTimeout(function () {
        $(".newsletter-form").removeClass("animated shake");
      }, 1000);
    }
    function submitMSGSub(valid, msg) {
      if (valid) {
        var msgClasses = "validation-success";
      } else {
        var msgClasses = "validation-danger";
      }
      $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
      url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
      callback: callbackFunction,
    });

    // FAQ Accordion
    $(function () {
      $(".accordion")
        .find(".accordion-title")
        .on("click", function () {
          // Adds Active Class
          $(this).toggleClass("active");
          // Expand or Collapse This Panel
          $(this).next().slideToggle("fast");
          // Hide The Other Panels
          $(".accordion-content").not($(this).next()).slideUp("fast");
          // Removes Active Class From Other Titles
          $(".accordion-title").not($(this)).removeClass("active");
        });
    });

    // Tabs
    (function ($) {
      $(".tab ul.tabs")
        .addClass("active")
        .find("> li:eq(0)")
        .addClass("current");
      $(".tab ul.tabs li a").on("click", function (g) {
        var tab = $(this).closest(".tab"),
          index = $(this).closest("li").index();
        tab.find("ul.tabs > li").removeClass("current");
        $(this).closest("li").addClass("current");
        tab
          .find(".tab_content")
          .find("div.tabs_item")
          .not("div.tabs_item:eq(" + index + ")")
          .slideUp();
        tab
          .find(".tab_content")
          .find("div.tabs_item:eq(" + index + ")")
          .slideDown();
        g.preventDefault();
      });
    })(jQuery);

    // Preloader
    $(window).on("load", function () {
      $(".preloader").fadeOut();
      $(".preloader-area").addClass("preloader-deactivate");
    });
  })(jQuery)
);
