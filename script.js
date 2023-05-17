var typed = new Typed('.multiple-text', {
  strings: ['Software Engineer', 'Frontend Developer'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.oneclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
// SCROLL SECTION ACTIVE LINK
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
  // sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  // scroll reveal
  ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
  ScrollReveal().reveal(
    '.homepicture,.project-container,project-box,.contact-form',
    { origin: 'bottom' }
  );
  ScrollReveal().reveal('.home-content h1', { origin: 'left' });
  ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
  // REMOVE TOGGLE ICON & NAVBAR
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = {};

  const formFields = form.querySelectorAll('input');
  for (let field of formFields) {
    formData = { ...formData, [field.name]: field.value };
  }
  formData = { ...formData, message: form.querySelector('textarea').value };

  console.log('formData', formData);
});
function displayNav(){
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}
