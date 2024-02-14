/* === Toggle icon navbar === */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/* === Scroll section active link === */
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
document.body.classList.toggle("light-theme");
themeBtn.classList.toggle("moon");

localStorage.setItem("saved-theme", getCurrentTheme());
localStorage.setItem("saved-icon", getCurrentTheme());
});

const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";
const getCurrentIcon = () => themeBtn.classList.contains("moon") ? "moon" : "sun";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
  themeBtn.classList[savedIcon === "moon" ? "add" : "remove"]("moon");
}

/* === Scroll section active link === */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +' ]').classList.add('active');
      });
    };
  });

  /* === Sticky navbar === */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

/* === Remove toggle icon and navbar when click navbar link (scroll)=== */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/* === Scroll reveal === */

ScrollReveal({
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-content, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* === Typed js === */
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});