function submitMSG(valid, msg) {
  const msgClasses = valid ? "h4 tada animated text-success" : "h4 text-danger";
  const msgSubmit = document.querySelector("#msgSubmit");
  msgSubmit.classList.remove("hidden");
  msgClasses.split(" ").forEach(function (className) {
    msgSubmit.classList.add(className);
  });

  msgSubmit.innerHTML = msg;
}

document.querySelector("#contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.target);

  fetch("/ URL TO ENDPOINT/", {
    method: "POST",
    data,
  })
    .then(function () {
      submitMSG(true, "Съобщението и изпратено успещно!");
    })
    .catch(function () {
      submitMSG(
        false,
        "Съобщението не може да бъде изпратено поради грешка. Опитайте пак по-късно."
      );
    });
});
