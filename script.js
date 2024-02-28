src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Software Devloper','Web Designer','UI Designer'],            
    typeSpeed: 60,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
});
