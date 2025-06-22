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

  const aboutText = "Welcome to my creative space! I'm Timilehin Olajolo— a Frontend Developer passionate about building clean, responsive, and user-friendly websites. I have a solid foundation in HTML and CSS, and I'm actively growing my skills in JavaScript and modern frontend tools. I enjoy bringing static designs to life and learning new technologies along the way. As I continue moving from beginner to intermediate level, I'm focused on refining my skills and exploring frameworks like React and tailwind to build better, more interactive user experiences. I believe growth comes from practice, consistency, and curiosity. Whether it's experimenting with layouts, improving accessibility, or contributing to beginner projects, I'm always looking for ways to level up. If you're working on something exciting or need a junior frontend developer to collaborate with, feel free to reach out — I'd love to learn and build with you.";

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

  