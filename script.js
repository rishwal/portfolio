(function () {
  "use strict";
  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /*Nav-list active class changer */
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  const textElement = document.querySelector(".typing-text");
  const textToType = "a web developer.";

  let charIndex = 0;

  (function () {
    const textElement = document.querySelector(".typing-text");
    const phrases = ["web developer", "designer.", "self learner."];
    let currentPhraseIndex = 0;
    let charIndex = 0;

    function typeText() {
      if (currentPhraseIndex >= phrases.length) {
        currentPhraseIndex = 0;
        textElement.textContent = "";
      }

      if (charIndex < phrases[currentPhraseIndex].length) {
        textElement.textContent +=
          phrases[currentPhraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50); // Adjust the typing speed here (in milliseconds)
      } else {
        setTimeout(eraseText, 1000); // Display each phrase for 1 second
      }
    }

    function eraseText() {
      if (charIndex >= 0) {
        textElement.textContent = phrases[currentPhraseIndex].substring(
          0,
          charIndex
        );
        charIndex--;
        setTimeout(eraseText, 20); // Adjust the erasing speed here (in milliseconds)
      } else {
        currentPhraseIndex++;
        setTimeout(typeText, 500); // Wait for 0.5 seconds before typing the next phrase
      }
    }

    typeText();
  })();

  /**Projects section nav links action */

  const tiles = Array.from(document.querySelectorAll(".projects-item"));
  const filterBtn = Array.from(document.querySelectorAll(".filter"));

  filterBtn.forEach((item, i, arr) => {



    item.addEventListener("click", function () {


      arr.forEach(val => {
        val.classList.remove("active");
      })
      item.classList.add("active");


      tiles.forEach(ele => {
        ele.style.display = "block"
      })


      let clsname = item.className.split(' ');

      let newArr = tiles.filter(value => {
        if (!(value.className.includes(`${clsname[1]}`))) {
          return value;
        }
      })

      newArr.forEach(item => {
        item.style.display = "none";
      })

    })
  })




})();

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_yjojcxh";
  const templateID = "template_hp67bdg";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      alert("your message sent successfully,Thank you.");
    })
    .catch((err) => console.log(err));
}
