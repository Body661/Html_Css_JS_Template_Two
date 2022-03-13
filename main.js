let toggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelector(".nav-links");

toggleMenu.onclick = function () {
  if (links) {
    links.style.display == "flex"
      ? (links.style.display = "")
      : (links.style.display = "flex");
  }
};

let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".prog span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
