
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });


  // contact form              



(function () {
    emailjs.init("-G1rwwiAkLZPhlAwz");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_fo96nwh",  
      "template_99u9hg4",  
      this
    ).then(
      function () {
        document.getElementById("status").innerHTML =
          "Message sent successfully ✅";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        document.getElementById("status").innerHTML =
          "Failed to send ❌";
        console.log(error);
      }
    );
  });

  // \drfye

