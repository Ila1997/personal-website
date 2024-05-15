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
    let top = window.scrollY; //posizione dello scrolling verticale
    let offset = sec.offsetTop - 150; //posizione iniziale della sezione rispetto al top del documento, con uno spazio di offset di 150 pixel
    let height = sec.offsetHeight; //altezza della sezione
    let id = sec.getAttribute('id'); //id della sezione

    if(top >= offset && top < offset + height) { //Verifica se la finestra si trova all'interno della sezione corrente
      navLinks.forEach(links => { //Itera attraverso tutti i link di navigazione
        links.classList.remove('active'); //Rimuove la classe "active" da tutti i link di navigazione
        document.querySelector('header nav a[href*=' + id +' ]').classList.add('active'); //Seleziona il link di navigazione della sezione visualizzata al momento e aggiunge la classe "active" ad esso.
      });
    };
  });

  /* === Sticky navbar === */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100); //aggiunge e rimuove sticky per barra di navigazione fissa sotto i 100px

/* === Remove toggle icon and navbar when click navbar link (scroll)=== */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/* === Scroll reveal, scrolling animations === */

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

/* === Typed js, digitazione dinamica=== */
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});