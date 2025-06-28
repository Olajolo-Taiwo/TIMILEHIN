const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const closeBtn= document.getElementById("close-btn");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});

  const name = "Timilehin Olajolo";
  const nameEl = document.querySelector(".typed-name");
  let i = 0;

  function typeName() {
    if (i < name.length) {
      nameEl.textContent += name.charAt(i);
      i++;
      setTimeout(typeName, 120);
    }
  }

  window.addEventListener("load", typeName);

  const aboutText = "A frontend developer who enjoys building clean, responsive websiteswith HTML, CSS, and JavaScript. I’m getting comfortable withTailwind CSS and plan to dive into React soon to take my skills further. I believe in learning by doing—whether it’s tweaking layouts, fixing tricky bugs, or exploring new ways to make websites smoother and more interactive. Right now, I’m focused on sharpening my fundamentals while slowly stepping into more advanced tools.Not an expert, but definitely on my way.";

  const aboutEl = document.querySelector('.typed-about');
  let a = 0;

  function typeAbout() {
    if (a < aboutText.length) {
      aboutEl.textContent += aboutText.charAt(a);
      a++;
      setTimeout(typeAbout, 60); // Typing speed
    }
  }

  window.addEventListener("load", typeAbout);

  